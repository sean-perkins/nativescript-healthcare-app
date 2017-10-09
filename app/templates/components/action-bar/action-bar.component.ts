import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPagePrimaryIcon, getPageHasBack, hasTransparentActionBar } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { isIOS } from 'tns-core-modules/platform';
import * as pageActions from '../../actions/page';
import { Label } from 'tns-core-modules/ui/label';
import { RouterExtensions } from 'nativescript-angular/router';

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
export class ActionBarComponent implements OnInit, OnDestroy {
    // Indicator if the action bar is transparent (used to flip styling)
    @Input() transparent = false;
    // The row to render the action bar on, default 0
    @Input() row = 0;
    // Emitted when the user toggles the navigation drawer icon
    @Output() onToggleNavigation: EventEmitter<any> = new EventEmitter();
    // The left column icon to display
    @Input() leftIcon = 'menu';
    // The view reference to the toggle icon
    @ViewChild('toggleIcon') toggleIcon: ElementRef;
    // The right column icon to display
    primaryIcon$: Observable<string>;
    // If the action bar has a back action enabled
    hasBack$: Observable<boolean>;
    // If the action bar has enabled transparency mode
    transparent$: Observable<boolean>;
    // Flag for the template to determine if iOS device
    isIOS: boolean;

    private destroy$: Subject<boolean> = new Subject();

    constructor(
        private store$: Store<any>,
        private routerExt: RouterExtensions) {
        this.isIOS = isIOS;
    }

    ngOnInit() {
        this.primaryIcon$ = this.store$.select(getPagePrimaryIcon);
        this.hasBack$ = this.store$.select(getPageHasBack);
        this.transparent$ = this.store$.select(hasTransparentActionBar);

        this.hasBack$
            .takeUntil(this.destroy$)
            .do(hasBack => {
                const toggle = this.toggleIcon.nativeElement as Label;
                toggle.animate({
                    translate: {
                        x: hasBack ? 30 : 0,
                        y: 0
                    },
                    duration: hasBack ? 200 : 0
                });
            })
            .subscribe();

    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    handlePrimaryAction(): void {
        this.store$.dispatch(new pageActions.PrimaryAction);
    }

    handleBackNavigation(): void {
        if (this.routerExt.canGoBack()) {
            this.routerExt.back();
        }
    }

}
