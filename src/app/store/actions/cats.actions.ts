import { createAction, props } from '@ngrx/store';
import { ICats } from '../../models/main';

export const getCats = createAction('[Main Component] Load Cats');

export const getCatsSuccess = createAction(
  '[Main Component] Cats Loaded Success',
  props<{ payload: ICats[] }>()
);
