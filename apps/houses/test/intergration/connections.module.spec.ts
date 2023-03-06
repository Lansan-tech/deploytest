import {
  AgentStub,
  IntergrationTestManager,
  LandlordStub,
  PropertyStub,
  UserStub,
} from '@app/common';
import { WaterConnection } from '../../src/connections/Entity/waterConnection.entiry';
import { HousesModule } from '../../src/houses.module';
import gql from 'graphql-tag';
import request from 'supertest-graphql';
import { Property } from '../../src/entity';
import { Landlord } from '../../../../apps/users/src/landlord/entity/landlord.entity';

describe('Given that a property has been created', () => {
  const intergrationTestManger = new IntergrationTestManager(HousesModule);
  let userToken: string;
  let room: Property;
  describe('When A createWater Mutation is executed', () => {
    beforeAll(async () => {
      await intergrationTestManger.beforeAll(UserStub);
      userToken = intergrationTestManger.getAccessToken();
      //Run mutation for intergration to user module.
      const server = await intergrationTestManger.intergrateToUserModule();
      await intergrationTestManger.createDefaultAgentUser();
      const responseLandlord = await request<{ createLandlord: Landlord }>(
        server,
      )
        .mutate(
          gql`
            mutation createLandlord($createLandlordData: CreateLandlordDto!) {
              createLandlord(createLandLordInput: $createLandlordData) {
                landlord
                name
              }
            }
          `,
        )
        .set('authorization', `Bearer ${userToken}`)
        .variables({
          createLandlordData: {
            ...LandlordStub,
          },
        })
        .expectNoErrors();
      console.log(responseLandlord.data);

      const response = await request<{
        createProperty: Property;
      }>(intergrationTestManger.httpServer)
        .mutate(
          gql`
            mutation createProperty($createPropertyData: CreatePropertyInput!) {
              createProperty(createProperty: $createPropertyData) {
                title
                uid
                units {
                  uid
                }
              }
            }
          `,
        )
        .set('authorization', `Bearer ${userToken}`)
        .variables({
          createPropertyData: {
            landlord: responseLandlord.data.createLandlord.landlord,
            uid: PropertyStub.name + PropertyStub.location,
            location: PropertyStub.location,
            name: PropertyStub.name,
            rentalUnits: [
              {
                size: PropertyStub.rentalUnits[0].size,
                uid: PropertyStub.rentalUnits[0].uid,
                is_psuedo: 0,
              },
            ],
          },
        })
        .expectNoErrors();
      console.log(response.data);

      room = response.data.createProperty;
    });

    afterAll(async () => {
      await intergrationTestManger.afterAll();
    });

    test('Water connection will be created with link to the property', async () => {
      const response = await request<{
        createWaterConnection: WaterConnection;
      }>(intergrationTestManger.httpServer)
        .mutate(
          gql`
            mutation createWaterConnection($createWaterData: CreateWaterDto!) {
              createWaterConnection(createWaterInput: $createWaterData) {
                start_date
              }
            }
          `,
        )
        .set('authentication', userToken)
        .variables({
          createWaterData: {
            roomUid: room.units[0].uid,
            waterMeterSerialNum: '2345-6758',
            waterReadingValue: 200,
          },
        })
        .expectNoErrors();

      const waterConnection = response.data.createWaterConnection;
      expect(waterConnection).toBeDefined();
    });
  });
});
