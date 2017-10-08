import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '@ngrx/effects';

import { getPageActiveWidget } from '../../../templates/reducers';
import * as Page from '../../../templates/actions/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'healthcare-dashboard-detail',
    templateUrl: './dashboard-detail.component.html'
})
export class DashboardDetailComponent implements OnInit, OnDestroy {

    widget$: Observable<any>;

    private destroy$: Subject<boolean> = new Subject();

    title: string;

    subTitle: string;

    barColor: string;

    value: any;

    constructor(
        private actions$: Actions,
        private store$: Store<any>,
        private router: RouterExtensions,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.widget$ = this.store$.select(getPageActiveWidget);
        this.widget$
            .takeUntil(this.destroy$)
            .do(widget => {
                if (!widget) {
                    this.router.navigate(['/app/dashboard']);
                }
                this.title = widget.label;
                this.subTitle = widget.unit;
                this.value = widget.value;
                if (widget.chartOptions) {
                    this.barColor = widget.chartOptions.lineColor;
                }

            })
            .subscribe();
        this.onPrimaryActionEffect();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    private onPrimaryActionEffect(): void {
        this.actions$
            .ofType(Page.PRIMARY_ACTION)
            .take(1)
            .do(() => {
                this.router.navigate(['/app/dashboard']);
            })
            .subscribe();
    }
}
