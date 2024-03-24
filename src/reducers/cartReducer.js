const initialState = {
  cartItems: []
};
const cartReducer = (state = initialState, action) => {
    const Add_To_Cart = 'Add_To_Cart';
    const Remove_From_Cart = 'Remove_From_Cart';
  switch (action.type) {
    case Add_To_Cart:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case Remove_From_Cart:
      return {
        ...state,
        cartItems: state.cartItems.filter((item, index) => index !== action.payload) 
      };
    default:
      return state;
  }
};

export default cartReducer;
