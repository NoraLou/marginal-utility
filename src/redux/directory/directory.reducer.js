const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
      size: 'large',
      id: 5,
      linkUrl: 'mens'
    },
    {
      title: 'unisex',
      imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      size: 'large',
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