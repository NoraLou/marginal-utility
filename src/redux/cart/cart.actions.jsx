import CartActionTypes  from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (cartItem) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem
});

export const clearItemFromCart = (cartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem
});