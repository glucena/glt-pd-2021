import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnChanges {

  @Input() dataList: any;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  config: any;
  shipId: string = '';
  url: string = '';

  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor() {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1
    };
  }

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnChanges(changes: SimpleChanges){
    if (this.dataList) {
      this.config.totalItems = this.dataList.count || 0;
    }
}
  //#endregion

  //#region UI METHODS
  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  onPageChanged(page) {
    this.config.currentPage = page;
    this.pageChanged.emit(page);
  }

  openDetails(details) {
    // TODO: replace jQuery
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
  }
  //#endregion

}
