import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { breedsState, IBreeds, IStore } from 'src/app/models/main';
import { CatsService } from 'src/app/services/cats.service';
import { getCats, getCatsSuccess } from 'src/app/store/actions/cats.actions';
import { selectBreedsState } from 'src/app/store/reducers/breeds.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  breeds$: Observable<breedsState> = this.store$.pipe(
    select(selectBreedsState)
  );
  catsBreeds$ = new Subject<IBreeds[]>();
  breed: string = '';
  itemsPePage: number = 10;
  constructor(private store$: Store<IStore>, private fetchData: CatsService) {}

  get selectedNumber(): number {
    return this.itemsPePage;
  }
  set selectedNumber(value: number) {
    if (value !== this.itemsPePage) {
      this.itemsPePage = value;
      this.store$.dispatch(getCats());
      this.fetchData.getAll(this.breed, value).subscribe((res) => {
        this.store$.dispatch(getCatsSuccess({ payload: res }));
      });
    }
  }

  get selectedBreed(): string {
    return this.breed;
  }
  set selectedBreed(value: string) {
    if (value !== this.breed) {
      this.breed = value;
      this.store$.dispatch(getCats());
      this.fetchData.getAll(value, this.selectedNumber).subscribe((res) => {
        this.store$.dispatch(getCatsSuccess({ payload: res }));
      });
    }
  }

  ngOnInit(): void {
    this.breeds$.subscribe((val) => this.catsBreeds$.next(val.name));
  }
}
