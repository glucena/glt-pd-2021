import { Component, Input } from '@angular/core';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsService } from 'src/app/shared/services/ships.service';
import { Store } from '@ngrx/store';

import { ShipsComponent } from './ships.component';



import { BehaviorSubject, of } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;
  const serviceMock = {
    getShips() { return  new BehaviorSubject([]); }
  };

  const storeMock = {
    select: () => {},
    dispatch: () => {}
  };

  @Component({
    selector: 'app-ships-details',
    template: '<p>Mock Ship Details</p>'
  })
  class MockShipDetails {
    @Input() dataList: any;
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShipsComponent,
        MockShipDetails
      ],
      providers: [
        Store,
        {provide: ShipsService, useValue: serviceMock},
        {provide: Store, useValue: storeMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
