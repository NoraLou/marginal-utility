import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.comp';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.comp';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';


const CheckoutPage = ({ cartItems, totalCost }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
       {cartItems.map(cartItem => (
         <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
       ))}
      <div className='total'>TOTAL: ${totalCost}</div>
      <StripeCheckoutButton price={totalCost} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCost: selectCartItemsTotal
});

export default connect (mapStateToProps)(CheckoutPage);