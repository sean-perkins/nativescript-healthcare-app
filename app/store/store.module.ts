import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { PageEffects } from './effects/page.effects';

@NgModule({
    imports: [
        EffectsModule.forRoot([PageEffects])
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppStoreModule { }
