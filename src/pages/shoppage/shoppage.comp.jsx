import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCurrentCollections } from '../../redux/shop/shop.selectors';
import './shoppage.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.comp';
import { createStructuredSelector } from 'reselect';
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {
      collections.map( ({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {... otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCurrentCollections
})

export default connect(mapStateToProps)(ShopPage);
