import { createSelector } from '@ngrx/store';
import { catsFeature } from '../reducers/cats.reducer';

export const selectCatsState = createSelector(
  catsFeature.selectData,
  catsFeature.selectLoading,

  (data, loading) => ({
    data,
    loading,
  })
);
