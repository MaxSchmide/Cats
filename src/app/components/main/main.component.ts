import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { catsState, ICats, IStore } from 'src/app/models/main';
import { selectCatsState } from 'src/app/store/selectors/cats.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cats$: Observable<catsState> = this.store$.pipe(select(selectCatsState));
  loadedCats$ = new Subject<ICats[]>();
  constructor(private store$: Store<IStore>) {}
  ngOnInit(): void {
    this.cats$.subscribe((val) => this.loadedCats$.next(val.data));
    this.loadedCats$.subscribe((val) => console.log(val));
  }
}
