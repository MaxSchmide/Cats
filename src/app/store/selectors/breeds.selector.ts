import { createSelector } from '@ngrx/store';
import { breedsFeature } from '../reducers/breeds.reducer';

export const selectBreedsState = createSelector(
  breedsFeature.selectName,
  breedsFeature.selectLoading,

  (name, loading) => ({
    name,
    loading,
  })
);
