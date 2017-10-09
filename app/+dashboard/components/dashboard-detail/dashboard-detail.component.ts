import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '@ngrx/effects';

import { getPageActiveWidget } from '../../../templates/reducers';
import * as Page from '../../../templates/actions/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { GoalDialogComponent } from '../../../templates/components/goal-dialog/goal-dialog.component';

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
        private route: ActivatedRoute,
        private vcRef: ViewContainerRef,
        private modalService: ModalDialogService) { }

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
            .takeUntil(this.destroy$)
            .do(() => {
                this.modalService.showModal(GoalDialogComponent, {
                    viewContainerRef: this.vcRef,
                    fullscreen: true
                }).then(() => {

                });
            })
            .subscribe();
    }
}
