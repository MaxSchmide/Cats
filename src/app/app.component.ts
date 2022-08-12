import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ICats, IResponse, IStore } from './models/main';
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
  breeds$ = new Subject<IResponse[]>();
  catUrl$ = new Subject<ICats[]>();
  constructor(private fetchData: CatsService, private store$: Store<IStore>) {}

  ngOnInit(): void {
    this.store$.dispatch(getCats());
    this.fetchData.getAll().subscribe((res) => {
      this.catUrl$.next(
        res.map((item) => {
          let response = {
            url: item.url,
          };
          return response;
        })
      );
    });
    this.catUrl$.subscribe((val) =>
      this.store$.dispatch(getCatsSuccess({ payload: val }))
    );

    this.store$.dispatch(getBreedsRequest());
    this.fetchData.getBreeds().subscribe((res) => {
      this.breeds$.next(
        res.map((item) => {
          let response = {
            name: item.name,
            id: item.id,
          };
          return response;
        })
      );
    });
    this.breeds$.subscribe((val) =>
      this.store$.dispatch(getBreedsSuccess({ payload: val }))
    );
  }
}
