import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCurrentCollections = createSelector(
  [selectShop],
  shop => shop.collections
)