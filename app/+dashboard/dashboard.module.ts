import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        DashboardDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
