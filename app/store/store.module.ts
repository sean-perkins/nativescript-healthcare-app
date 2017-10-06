import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        EffectsModule.forRoot([])
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppStoreModule { }
