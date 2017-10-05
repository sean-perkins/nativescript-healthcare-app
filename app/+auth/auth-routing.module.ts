import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class AuthRoutingModule { }
