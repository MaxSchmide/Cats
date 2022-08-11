import { createAction, props } from '@ngrx/store';
import { IBreeds } from 'src/app/models/main';

export const getBreedsRequest = createAction(
  '[Main Component] Get Breeds Request'
);
export const getBreedsSuccess = createAction(
  '[Main Component] Get Breeds Success',
  props<{ payload: IBreeds[] }>()
);
