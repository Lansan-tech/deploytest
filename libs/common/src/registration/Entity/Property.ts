import { Flow } from './type';

export const PropertyFlow: Flow = {
  'Property Info': {
    tableName: 'property',
    isMultiple: true,
    populate: true,
    fields: [
      {
        id: 'propertyName',
        label: 'Property Name',
        name: 'propertyName',
        type: 'text',
      },
      {
        type: 'text',
        id: 'propertyLocation',
        name: 'propertyLocation',
        label: 'Provided Location',
      },
      {
        type: 'text',
        id: 'clientqualterly',
        name: 'clientQualterly',
        label: 'Does the Client Pay Quaterly',
      },
      {
        type: 'select',
        id: 'propertylandlord',
        name: 'propertyLandlord',
        label: 'Property Landlord',
        options: {
          values: [],
          tableName: 'agent',
          fields: ['username', 'name'],
        },
      },
      {
        type: 'select',
        id: 'propertylandlord',
        name: 'propertyLandlord',
        label: 'Property Landlord',
        options: {
          values: [],
          tableName: 'agent',
          fields: ['username', 'name'],
        },
      },
    ],
    definations: [
      {
        label: 'It service',
        value: 'It Services',
      },
    ],
  },
  'Services Offered': {
    populate: true,
    tableName: 'services',
    fields: [
      {
        id: 'serviceName',
        label: 'Service Name',
        name: 'propertyName',
        type: 'text',
      },
      {
        type: 'number',
        id: 'serviceCharge',
        name: 'serviceCharge',
        label: 'Service Charged',
      },
      {
        type: 'text',
        id: 'serviceDesc',
        name: 'serviceDesc',
        label: 'Service Description',
      },
    ],
    definations: [
      {
        label: 'It service',
        value: 'It Services',
      },
    ],
  },
  'Water Connection': {
    tableName: 'wconnetion',
    fields: [
      {
        id: 'serviceName',
        label: 'Service Name',
        name: 'propertyName',
        type: 'text',
      },
      {
        type: 'number',
        id: 'serviceCharge',
        name: 'serviceCharge',
        label: 'Service Charged',
      },
      {
        type: 'text',
        id: 'serviceDesc',
        name: 'serviceDesc',
        label: 'Service Description',
      },
    ],
    definations: [
      {
        label: 'It service',
        value: 'It Services',
      },
    ],
  },
  'Power Connection': {
    tableName: 'econnection',
    fields: [
      {
        id: 'serviceName',
        label: 'Service Name',
        name: 'propertyName',
        type: 'text',
      },
      {
        type: 'number',
        id: 'serviceCharge',
        name: 'serviceCharge',
        label: 'Service Charged',
      },
      {
        type: 'text',
        id: 'serviceDesc',
        name: 'serviceDesc',
        label: 'Service Description',
      },
    ],
    definations: [
      {
        label: 'It service',
        value: 'It Services',
      },
    ],
  },
};
