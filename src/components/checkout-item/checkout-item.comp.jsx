import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItemFromCart, removeItem, addCartItem}) => {
  const { name, imageUrl, price, quantity} = cartItem;
  return (
      <div className='checkout-item'>
        <div className='image-container'>
          <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow'
            onClick={()=>removeItem(cartItem)}>
            &#10094;
          </div>
            <span className='value'>{quantity}</span>
          <div className='arrow'
            onClick={()=>addCartItem(cartItem)}>
            &#10095;
          </div>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button'
          onClick={()=>clearItemFromCart(cartItem)}>&#10005;</span>
      </div>
    )
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addCartItem: item => dispatch(addCartItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem)