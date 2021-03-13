import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShipsRoutingModule } from './ships-routing.module';
// Components
import { ShipsComponent } from './ships.component';
import { ShipsDetailsComponent } from './ships-details/ships-details.component';

@NgModule({
    declarations: [
        ShipsComponent,
        ShipsDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        SharedModule,
        ShipsRoutingModule,
    ],
    exports: []
})
export class ShipsModule {}
