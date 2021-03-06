import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.comp';
import CollectionPage from '../collectionpage/collectionpage.comp';
import './shoppage.styles.scss';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
  </div>
);

export default ShopPage;
