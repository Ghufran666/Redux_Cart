 const Add_To_Cart = 'Add_To_Cart';
 const Remove_From_Cart = 'Remove_From_Cart';

export const addToCart = (item) => ({
  type: Add_To_Cart,
  payload: item,
});

export const removeFromCart = (index) => ({
  type: Remove_From_Cart,
  payload: index,
});

