import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { SettingsRouterModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
    imports: [
        SettingsRouterModule
    ],
    declarations: [
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
