import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageOneRoutingModule } from './page-one-routing.module';
// Components
import { PageOneComponent } from './page-one.component';

@NgModule({
    declarations: [
        PageOneComponent,
    ],
    imports: [
        CommonModule,
        PageOneRoutingModule,
    ],
    exports: []
})
export class PageOneModule {}
