import { createAction, props } from '@ngrx/store';
import { IResponse } from 'src/app/models/main';

export const getBreedsRequest = createAction(
  '[Main Component] Get Breeds Request'
);
export const getBreedsSuccess = createAction(
  '[Main Component] Get Breeds Success',
  props<{ payload: IResponse[] }>()
);
