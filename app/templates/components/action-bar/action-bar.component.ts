import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBarIcon } from '../../../store/app.state';
import { Observable } from 'rxjs/Observable';
import { isIOS } from 'tns-core-modules/platform';

import * as pageActions from '../../../store/actions/page';
/**
 * Custom Action Bar Implementation
 * Allows us to have complete control of the content, styling and behavior.
 * @author Sean Perkins <sean-perkins>
 *
 */
@Component({
    moduleId: module.id,
    selector: 'healthcare-actionbar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
    // Indicator if the action bar is transparent (used to flip styling)
    @Input() transparent = false;
    // The row to render the action bar on, default 0
    @Input() row = 0;
    // Emitted when the user toggles the navigation drawer icon
    @Output() onToggleNavigation: EventEmitter<any> = new EventEmitter();
    // The left column icon to display
    @Input() leftIcon = 'menu';
    // The right column icon to display
    rightIcon$: Observable<string>;
    // Flag for the template to determine if iOS device
    isIOS: boolean;

    constructor(private store$: Store<any>) {
        this.isIOS = isIOS;
    }

    ngOnInit() {
        this.rightIcon$ = this.store$.select(getBarIcon);
    }

    rightIconTapped(): void {
        console.log('dispatch action here');
        this.store$.dispatch(new pageActions.BarIconPressed);
    }

}
