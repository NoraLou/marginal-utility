import React from 'react';
import CustomButton from '../custom-button/custom-button.comp';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.comp';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map( cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}


const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropDown);