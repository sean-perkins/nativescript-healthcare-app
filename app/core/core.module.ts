import { EffectsModule } from '@ngrx/effects';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

import { AuthService } from './services/auth.service';

@NgModule({
    providers: [
        AuthService
    ],
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        /**
         * EffectsModule.forRoot() is imported once in the root module and
         * sets up the effects class to be initialized immediately when the
         * application starts.
         *
         * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
         */
        EffectsModule.forRoot([]),
    ]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded. Import into the root module only.');
        }
    }
}
