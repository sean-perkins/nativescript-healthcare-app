import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { reducers } from './reducers';
import { BaseAuthService } from './services/auth.service';
import { AuthEffects } from './effects/auth.effects';

import { LoginSuccessUrlToken } from './tokens';

const providers = [
    {
        provide: LoginSuccessUrlToken,
        useValue: 'app/dashboard'
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
