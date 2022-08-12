import { createFeature, createReducer, on } from '@ngrx/store';
import { breedsState } from 'src/app/models/main';
import { getBreedsRequest, getBreedsSuccess } from '../actions/breeds.actions';

const initialState: breedsState = {
  loading: false,
  names: [],
};

export const breedsFeature = createFeature({
  name: 'breeds',
  reducer: createReducer(
    initialState,
    on(getBreedsRequest, (state) => {
      return { ...state, loading: true };
    }),
    on(getBreedsSuccess, (state, action) => ({
      ...state,
      loading: false,
      names: action.payload,
    }))
  ),
});
export const { name, reducer, selectBreedsState, selectLoading, selectNames } =
  breedsFeature;
