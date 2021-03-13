import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTwoRoutingModule } from './page-two-routing.module';
// Components
import { PageTwoComponent } from './page-two.component';

@NgModule({
    declarations: [
        PageTwoComponent,
    ],
    imports: [
        CommonModule,
        PageTwoRoutingModule,
    ],
    exports: []
})
export class PageTwoModule {}
