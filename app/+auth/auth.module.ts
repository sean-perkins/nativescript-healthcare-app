import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
