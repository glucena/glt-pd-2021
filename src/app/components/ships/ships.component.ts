import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/shared/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor( private shipsService: ShipsService) {}

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results);
    });
  }
  //#endregion
}
