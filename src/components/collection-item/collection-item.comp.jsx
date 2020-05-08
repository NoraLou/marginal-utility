import React from 'react';
import './collection-item.styles.scss';
import {connect} from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.comp';

const CollectionItem = ({item, addCartItem}) => {
  const {imageUrl, name, price} = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        inverted
        onClick= {()=>addCartItem(item)}
      >
        Add to Cart
      </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
  addCartItem: cartItem => dispatch(addCartItem(cartItem))
});


export default connect (null, mapDispatchToProps)(CollectionItem);