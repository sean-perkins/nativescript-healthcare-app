import { Component, OnInit } from '@angular/core';
import './operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';

import * as pageActions from './templates/actions/page';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

    constructor(
        private store$: Store<any>,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.route)
            .map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            })
            .mergeMap(route => route.data)
            .map((payload: any) => {
                const actionBar = payload.actionBar;
                if (actionBar) {
                    this.store$.dispatch(new pageActions.PrimaryIcon(actionBar.rightIcon));
                }
            })
            .subscribe();
    }
}
