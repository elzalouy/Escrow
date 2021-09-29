const initialState = {
  supplierWorkPackages: [
    {
      id: null,
      name: '',
      description: '',
      short_description: null,
      value: null,
      buyer: {
        id: null,
        auth_contact_name: '',
        email: '',
      },
      supplier: {
        id: null,
        auth_contact_name: '',
        email: '',
      },
      milestones: [
        {
          id: null,
          name: '',
          description: '',
        },
      ],
    },
  ],
  buyerWorkPackages: [
    {
      id: null,
      name: '',
      description: '',
      short_description: null,
      value: null,
      buyer: {
        id: null,
        auth_contact_name: '',
        email: '',
      },
      supplier: {
        id: null,
        auth_contact_name: '',
        email: '',
      },
      milestones: [
        {
          id: null,
          name: '',
          description: '',
        },
      ],
    },
  ],
  newWorkPackage: {
    title: '',
    content: '',
    amount: '',
    milestones: [{title: '', content: '', value: ''}],
  },
  newMilestone: {title: '', content: '', value: ''},
};
export default initialState;
