import { createSelector } from '@ngrx/store';
import { breedsFeature } from '../reducers/breeds.reducer';

export const selectBreedsState = createSelector(
  breedsFeature.selectNames,
  breedsFeature.selectLoading,

  (names, loading) => ({
    names,
    loading,
  })
);
