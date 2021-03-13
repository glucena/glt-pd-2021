import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base-component/base.component';

@NgModule({
    declarations: [
        BaseComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule {}
