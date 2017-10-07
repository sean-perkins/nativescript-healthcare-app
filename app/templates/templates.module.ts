import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptUIChartModule } from 'nativescript-pro-ui/chart/angular';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { NSMaterialIconsModule } from '../material-icons/material-icons.module';
import { StatisticComponent } from './components/statistic/statistic.component';

import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
import { PageComponent } from './components/page/page.component';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';
import { PageEffects } from './effects/page.effects';

import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        NSMaterialIconsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule,
        NativeScriptUIChartModule,
        StoreModule.forFeature('page', reducers),
        EffectsModule.forFeature([PageEffects])
    ],
    declarations: [
        ActionBarComponent,
        StatisticComponent,
        PageComponent,
        SideDrawerComponent
    ],
    exports: [
        ActionBarComponent,
        StatisticComponent,
        PageComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TemplatesModule { }
