import { Flow } from './type';

export const landlordRegistration: Flow = {
  'Landlord Info': {
    tableName: 'landlord',
    populate: false,
    fields: [
      {
        id: 'landlordName',
        label: 'Landlords Name',
        name: 'clientName',
        type: 'text',
      },
      {
        type: 'text',
        id: 'landlordTitle',
        name: 'landlordTitle',
        label: 'Landlords Title',
      },
      {
        type: 'number',
        id: 'paybillNo',
        name: 'paybillNo',
        label: 'Mpesa Paybill Number',
      },
    ],
    definations: [
      {
        label: 'LandLords Name',
        value: 'Collected for Identification',
      },
      {
        label: 'Landlords Title',
        value:
          'A descriptive Title for the landlord, Used On Notification headers and communication',
      },
    ],
  },
};
