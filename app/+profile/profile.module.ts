import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRouterModule } from './profile-routing.module';

@NgModule({
    imports: [
        ProfileRouterModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        ProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }
