import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            actionBar: {
                rightIcon: 'plus-circle-o'
            }
        }
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
export class DashboardRoutingModule { }
