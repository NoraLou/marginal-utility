import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectionCurrentSections = createSelector(
  [selectDirectory],
  directory => directory.sections
)