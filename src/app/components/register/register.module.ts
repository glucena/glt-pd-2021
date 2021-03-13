import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
// Components
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        RegisterComponent,
    ],
    imports: [
        SharedModule,
        RegisterRoutingModule,
    ],
    exports: []
})
export class RegisterModule {}
