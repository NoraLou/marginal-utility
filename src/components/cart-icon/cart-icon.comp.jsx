import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import  { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, totalItems }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{totalItems}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart : { cartItems }}) => ({
  totalItems : cartItems.reduce( (accum, cartItem) => {
    return accum + cartItem.quantity;
  },0)
})



export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);
