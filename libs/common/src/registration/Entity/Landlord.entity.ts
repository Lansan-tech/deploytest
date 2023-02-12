export const landlordRegistration = {
  'Client Orientation': {
    fields: [
      {
        id: 'clientName',
        label: 'Client Name',
        name: 'clientName',
        type: 'text',
      },
      {
        type: 'select',
        id: 'clientServices',
        name: 'clientServices',
        label: 'Provided Services',
        options: [
          {
            label: 'It service',
            value: 'It Services',
          },
        ],
      },
      {
        type: 'radio',
        id: 'clientqualterly',
        name: 'clientQualterly',
        label: 'Does the Client Pay Quaterly',
      },
    ],
    definations: [
      {
        label: 'It service',
        value: 'It Services',
      },
    ],
  },
  'Client Agreement': {
    fields: [
      {
        id: 'agreementStartDate',
        label: 'Client Name',
        name: 'agreementStartDate',
        type: 'date',
      },
      {
        type: 'date',
        id: 'agreementEndDate',
        name: 'agreementEndDate',
        label: 'Provided Services',
      },
      {
        type: 'radio',
        id: 'clientqualterly',
        name: 'clientQualterly',
        label: 'Does the Client Pay Quaterly',
      },
      {
        type: 'select',
        id: 'agreementUnit',
        label: 'Rental Unit',
        name: 'agreementUnit',
        options: [
          {
            value: 'Room number',
            label: 'room number',
          },
        ],
      },
      {
        type: 'number',
        id: 'agreementPrice',
        name: 'agreementPrice',
        label: 'Agreement Price',
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