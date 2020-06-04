import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentCollection } from '../../redux/shop/shop.selectors';
//import CollectionItem from '../../components/collection-item/collection-item.comp';
import './collectionpage.styles.scss';

const CollectionPage = ( { collection } ) => {
  return (
    <div className='collection'>
      <h2>CATEGORY PAGE</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCurrentCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CollectionPage)