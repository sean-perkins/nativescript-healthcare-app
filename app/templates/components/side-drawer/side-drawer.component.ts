import { Store } from '@ngrx/store';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as auth from '../../../common/actions/auth';
import { Observable } from 'rxjs/Observable';
import { getAuthUser } from '../../../common/reducers';

/**
 * Side-drawer Representation Component
 * All the inner-content of the side drawer
 * @author Sean Perkins <sean-perkins>
 */
@Component({
    moduleId: module.id,
    selector: 'healthcare-sidedrawer',
    templateUrl: './side-drawer.component.html',
    styleUrls: ['./side-drawer.component.css']
})
export class SideDrawerComponent implements OnInit {
    // Event emitted when the user selects a menu item
    @Output() onNavigate: EventEmitter<boolean> = new EventEmitter();
    // The collection of navigational menu items
    menuItems: any[] = [
        {
            label: 'Dashboard',
            link: ['/app/dashboard']
        },
        {
            label: 'Settings',
            link: ['/app/settings']
        },
        {
            label: 'Add a goal',
            // Items denoted with an action do not navigate
            action: () => {
                console.log('called');
            }
        },
        {
            label: 'Profile',
            link: ['/app/profile']
        },
        {
            label: 'Sign out',
            action: () => {
                this.store$.dispatch(new auth.Logout);
            }
        }
    ];

    authUser$: Observable<any>;

    constructor(
        private store$: Store<any>,
        private routerExt: RouterExtensions) { }

    ngOnInit() {
        this.authUser$ = this.store$.select(getAuthUser);
    }

    /**
     * Handles the selection of a menu item
     * @param menuItem The menu item selected
     */
    onMenuTap(menuItem: any) {
        // Attempt to navigate if the menu item has a link
        if (menuItem.link && menuItem.link.length > 0) {
            this.routerExt.navigate(menuItem.link);
        }
        // Otherwise execute an anonymous function
        else if (menuItem.action) {
            menuItem.action();
        }
        // Emit that navigation occured to dismiss the sidedrawer
        this.onNavigate.next(true);
    }

}
