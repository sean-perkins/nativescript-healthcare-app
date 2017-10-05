import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
