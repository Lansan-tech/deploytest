import { IntergrationTestManager, UserStub } from '@app/common';
import { UsersModule } from '../../src/users.module';

describe('Given that Properties are all ready registered', () => {
  describe('When A create Tenant Mutataion is executed', () => {
    const intergrationtestManger = new IntergrationTestManager(UsersModule);
    beforeAll(async () => {
      //Do Intergaration
      await intergrationtestManger.beforeAll(UserStub);
    });

    test('Tennat should be linked to the given property', () => {
      expect(true).toBe(true);
    });
  });
});
