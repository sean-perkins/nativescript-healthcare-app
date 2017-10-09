import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { PageComponent } from './templates/components/page/page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        // redirectTo: '/app/profile',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './+auth/auth.module#AuthModule'
    },
    {
        path: 'app',
        component: PageComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            {
                path: 'dashboard',
                loadChildren: './+dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'settings',
                loadChildren: './+settings/settings.module#SettingsModule'
            },
            {
                path: 'profile',
                loadChildren: './+profile/profile.module#ProfileModule'
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
