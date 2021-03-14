import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';

import { Ship } from 'src/app/shared/models/ship.model';
import { ShipsService } from 'src/app/shared/services/ships.service';
import { SHIP_LIST } from '../../store/actions/ships.action';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList$: Observable<Ship[]>;

  constructor(
    private shipsService: ShipsService,
    private store: Store<AppState>,
  ) {
    this.dataList$ = store.select('ships');
  }

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
     this.shipsService.getShips()
      .subscribe((dataList) => {
        console.log(dataList);
        this.store.dispatch({
          type: SHIP_LIST,
          payload: dataList
        });
      });
  }
  //#endregion
}
