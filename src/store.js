export const initialStore = () => {
  return [];
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'GET_CONTACTS':

      const { contacts } = action.payload;

    return contacts ? contacts : [];

    default:
      throw Error('Unknown action.');
  }
}
