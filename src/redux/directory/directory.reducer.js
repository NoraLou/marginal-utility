const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
      id: 4,
      linkUrl: 'womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
      id: 5,
      linkUrl: 'mens'
    },
    {
      title: 'unisex',
      imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      id: 3,
      linkUrl: 'unisex'
    },
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;