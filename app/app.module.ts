import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NSModuleFactoryLoader } from 'nativescript-angular/router';
import { TemplatesModule } from './templates/templates.module';
import { registerElement } from 'nativescript-angular/element-registry';

import { AppCommonModule } from './common/common.module';

import * as commonTokens from './common/tokens';
import { CoreModule } from './core/core.module';


import { BaseAuthService } from './common/services/auth.service';
import { AuthService } from './core/services/auth.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from 'nativescript-angular/http';

registerElement('AnimatedCircle', () => require('nativescript-animated-circle').AnimatedCircle);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TemplatesModule,
        CoreModule,
        AppCommonModule.forRoot([
            // {
            //     provide: commonTokens.LoginSuccessUrlToken,
            //     useValue: 'app/dashboard'
            // },
            // {
            //     provide: commonTokens.LogoutSuccessUrlToken,
            //     useValue: 'auth/login'
            // },
            {
                provide: BaseAuthService,
                useClass: AuthService
            }
        ])

    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
