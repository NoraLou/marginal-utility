import React from 'react';
import CustomButton from '../custom-button/custom-button.comp';
import './cart-dropdown.styles.scss';
import  { connect } from 'react-redux';

const CartDropDown = ({ hidden }) => {
  console.log('hidden :',hidden);
  return (
    <div className={ `cart-dropdown ${hidden ? 'hidden' : ''}` }>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  hidden: state.cart.hidden
})

export default connect(mapStateToProps, null)(CartDropDown);