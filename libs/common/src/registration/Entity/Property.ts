export const PropertyFlow = {
  'Property Info': {
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
