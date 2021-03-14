import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/shared/models/ship.model';
import { ShipsService } from 'src/app/shared/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList$: Observable<Ship[]>;

  constructor( private shipsService: ShipsService) {}

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
    this.dataList$ = this.shipsService.getShips();
  }
  //#endregion
}
