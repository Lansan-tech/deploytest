import { IntergrationTestManager } from '@app/common';
import { User } from '../../../auth/src/resolver/entity/user.entity';
import { UsersModule } from '../../src/users.module';
import request from 'supertest-graphql';
import gql from 'graphql-tag';
import { AgentStub } from '../stubs';

describe('Given a user has already logged in', () => {
  const intergrationtestManger = new IntergrationTestManager(UsersModule);

  beforeEach(async () => {
    await intergrationtestManger.beforeAll();
  });
  describe('When Create agent Mutataion has been called', () => {
    let userToken: string;
    let createdUser: User;
    beforeAll(async () => {
      userToken = intergrationtestManger.getAccessToken();

      const response = await request<{ user: User }>(
        intergrationtestManger.httpServer,
      )
        .mutate(
          gql`
        mutation createAgent($createAgentData: CreateAgentDto!){
          createAgent(agentDto: @createAgentData) {
            username
          }
        }
      `,
        )
        .variables(AgentStub)
        .set('authorization', `Bearer ${userToken}`);

      createdUser = response.data.user;
    });
    test('An agent should be created and liked to the current logged in user', async () => {
      expect(createdUser).toMatchObject({
        username: AgentStub.username,
      });
    });
  });
});
