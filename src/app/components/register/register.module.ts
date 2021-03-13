import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: []
})
export class RegisterModule {}
