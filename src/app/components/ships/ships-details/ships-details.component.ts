import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base-component/base.component';
import { Ship } from 'src/app/shared/models/ship.model';
declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';

  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor() {
    super();
  }

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1
      };
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.dataList) {
      this.config.totalItems = this.dataList.count;
    }
}
  //#endregion

  //#region UI METHODS
  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    // TODO: replace jQuery
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }
  //#endregion

}
