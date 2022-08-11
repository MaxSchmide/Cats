import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { breedsState, IBreeds } from './models/main';
import { CatsService } from './services/cats.service';
import {
  getBreedsRequest,
  getBreedsSuccess,
} from './store/actions/breeds.actions';
import { getCats, getCatsSuccess } from './store/actions/cats.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private fetchData: CatsService,
    private store: Store<{ breeds: breedsState }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCats());
    this.fetchData.getAll('', 10).subscribe((res) => {
      this.store.dispatch(getCatsSuccess({ payload: res }));
    });

    this.store.dispatch(getBreedsRequest());
    this.fetchData.getBreeds().subscribe((res: IBreeds[]) => {
      this.store.dispatch(getBreedsSuccess({ payload: res }));
    });
  }
}
