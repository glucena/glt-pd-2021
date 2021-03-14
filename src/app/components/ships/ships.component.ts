import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';

import { BaseComponent } from 'src/app/shared/base-component/base.component';

import { Ship } from 'src/app/shared/models/ship.model';
import { ShipsService } from 'src/app/shared/services/ships.service';
import { SHIP_LIST } from '../../store/actions/ships.action';
import { flatMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent extends BaseComponent implements OnInit {

  public dataList$: Observable<Ship[]>;

  constructor(
    private shipsService: ShipsService,
    private store: Store<AppState>,
  ) {
    super();

    this.dataList$ = store.select('ships');
  }

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
    const subscription = this.shipsService.getShips()
      .subscribe((dataList) => {
        this.store.dispatch({
          type: SHIP_LIST,
          payload: dataList
        });
      });

    // The subscription will be undone automatically. See componentBase.
    this.subscriptions.push(subscription);
  }
  //#endregion

  //#region UI METHODS
  getShipsPage(page = 1) {
    this.shipsService.getShips(page)
      .pipe(
        take(1)
      )
      .subscribe((dataList) => {
        this.store.dispatch({
          type: SHIP_LIST,
          payload: dataList
        });
      });
  }
  //#endregion
}
