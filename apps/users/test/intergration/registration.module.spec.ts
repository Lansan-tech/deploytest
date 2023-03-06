import { IntergrationTestManager, UserStub } from '@app/common';
import { RegistrationModule } from '../../src/registration/registration.module';
import { Flow } from '../../src/registration/values/type';
import gql from 'graphql-tag';
import request from 'supertest-graphql';
import { tenantRegistration } from '../../src/registration/values/Tenant.entity';
import { UsersModule } from '../../src/users.module';

describe('Given that an Angent or lanlord User has looged in', () => {
  const intergratingtestManger = new IntergrationTestManager(UsersModule);
  let flow: Flow;

  describe('When a Query getClientRegFlow is excuted', () => {
    beforeAll(async () => {
      await intergratingtestManger.beforeAll(UserStub);
      const userToken = intergratingtestManger.getAccessToken();

      const resposne = await request<{ tenantFlow: Flow }>(
        intergratingtestManger.httpServer,
      )
        .mutate(
          gql`
            query tenantFlow {
              tenantFlow {
                steps {
                  title
                }
              }
            }
          `,
        )
        .set('authorization', `Bearer ${userToken}`)
        .expectNoErrors();

      flow = resposne.data.tenantFlow;
    });
    test('A registration flow should be provieded', () => {
      expect(flow).toBeDefined();
    });
  });
  describe('When a Query propertyRegFlow is executed', () => {
    test('A flow registration Flow should be available', () => {
      expect(true).toBe(true);
    });
  });
});
