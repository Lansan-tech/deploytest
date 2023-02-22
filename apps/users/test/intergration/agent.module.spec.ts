import { IntergrationTestManager } from '@app/common';
import { UsersModule } from '../../src/users.module';
import request from 'supertest-graphql';
import gql from 'graphql-tag';
import { AgentStub, AgentUpdate } from '../stubs';
import { AgentUser } from '../../src/agent/entity/agent.entity';
import { User } from '../../src/agent/entity/user.entity';

describe('Given a user has already logged in', () => {
  const intergrationtestManger = new IntergrationTestManager(UsersModule);

  beforeAll(async () => {
    await intergrationtestManger.beforeAll();
  });
  describe('When Create agent Mutataion has been called', () => {
    let userToken: string;
    let createdUser: AgentUser;
    beforeAll(async () => {
      //Delete any exsisting user in the agent tabl
      //Initaile underlyinng app
      await intergrationtestManger.beforeAll();
      await intergrationtestManger.dbConnection.agent.deleteMany({});
      //get User access token
      userToken = intergrationtestManger.getAccessToken();
      //make the request
      const response = await request<{ createAgent: AgentUser }>(
        intergrationtestManger.httpServer,
      )
        .mutate(
          gql`
            mutation createAgent($createAgentData: CreateAgentDto!) {
              createAgent(agentDto: $createAgentData) {
                agent
                username
              }
            }
          `,
        )
        .variables({
          createAgentData: {
            ...AgentStub,
          },
        })
        .set('authorization', `Bearer ${userToken}`)
        .expectNoErrors();

      createdUser = response.data.createAgent;
    });
    test('An agent should be created and liked to the current logged in user', async () => {
      expect(createdUser).toMatchObject({
        username: AgentStub.username,
      });
    });

    test('User should exist in database', async () => {
      const agent = await intergrationtestManger.dbConnection.agent.findUnique({
        where: {
          username: AgentStub.username,
        },
      });
      expect(agent).toBeDefined();
    });

    test('User can be updated', async () => {
      const response = await request<{ updateAgent: AgentUser }>(
        intergrationtestManger.httpServer,
      )
        .mutate(
          gql`
            mutation createAgent(
              $agentId: Int!
              $updateAgentData: UpdateAgentDto!
            ) {
              updateAgent(agent: $agentId, updateAgentDto: $updateAgentData) {
                agent
                username
              }
            }
          `,
        )
        .variables({
          updateAgentData: {
            ...AgentUpdate,
          },
          agentId: createdUser.agent,
        })
        .set('authorization', `Bearer ${userToken}`)
        .expectNoErrors();
      const updateAgent = response.data.updateAgent;
      expect(updateAgent).toMatchObject({
        username: AgentUpdate.username,
      });
    });

    test('Should return Agent User Profile', () => {
      const response = request<{ agentProfile: User }>(
        intergrationtestManger.httpServer,
      )
        .query(
          gql`
            query getAgentProfile(){
              agentProfile {
                name
                email
                inageUrl
                agent {
                  name
                  title
                }
              }
            }
        `,
        )
        .expectNoErrors();
      const agentProfile = response;
      expect(agentProfile).toMatchObject({
        username: AgentStub.username,
      });
    });
  });
});
