import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { reducers } from './reducers';
import { BaseAuthService } from './services/auth.service';
import { AuthEffects } from './effects/auth.effects';

import * as tokens from './tokens';

const providers = [
    {
        provide: tokens.LoginSuccessUrlToken,
        useValue: 'app/dashboard'
    },
    {
        provide: tokens.LogoutSuccessUrlToken,
        useValue: 'auth/login'
    }
];

@NgModule({
    providers: [
        BaseAuthService,
        ...providers
    ],
    imports: [
        StoreModule.forFeature('common', reducers),
        NativeScriptRouterModule,
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AppCommonModule {

    static forRoot(configuredProviders: any[] = []): ModuleWithProviders {
        return {
            ngModule: AppCommonModule,
            providers: [
                ...providers,
                ...configuredProviders
            ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AppCommonModule) {
        if (parentModule) {
            throw new Error('AppCommonModule already loaded. Import into the root module only.');
        }
    }

}
