import { createFeature, createReducer, on } from '@ngrx/store';
import { catsState, ICats } from '../../models/main';
import { getCats, getCatsSuccess } from '../actions/cats.actions';

const initialState: catsState = {
  loading: true,
  data: [],
};

export const catsFeature = createFeature({
  name: 'cats',
  reducer: createReducer(
    initialState,
    on(getCats, (state) => {
      return { ...state, loading: true };
    }),
    on(getCatsSuccess, (state, action) => {
      return { ...state, loading: false, data: action.payload };
    })
  ),
});
export const { name, reducer, selectCatsState, selectData, selectLoading } =
  catsFeature;
