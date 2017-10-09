import { Store } from '@ngrx/store';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { getAuthUser } from '../../../common/reducers';
import { Page } from 'tns-core-modules/ui/page';

import * as pageActions from '../../../templates/actions/page';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'healthcare-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

    authUser$: Observable<any>;

    constructor(
        private page: Page,
        private store$: Store<any>) { }

    ngOnInit() {
        this.authUser$ = this.store$.select(getAuthUser);
    }

    ngAfterViewInit() {
        this.page.backgroundSpanUnderStatusBar = true;
        // Push the action into the next thread so the action bar draws correctly
        setTimeout(() => {
            this.store$.dispatch(new pageActions.ActionBarTransparent(true));
        });
    }

    ngOnDestroy() {
        this.store$.dispatch(new pageActions.ActionBarTransparent(false));
    }

    get backgroundImage(): string {
        const url = 'http://media.istockphoto.com/photos/heroes-are-ordinary-people-who-make-themselves-extraordinary-picture-id537738697?k=6&m=537738697&s=612x612&w=0&h=6PuztkUY9mQ0fbQG6ih4GK9Fpv9KZALnGrPAV7UZ6AA=';
        return `url('${encodeURI(url)}')`;
    }

}
