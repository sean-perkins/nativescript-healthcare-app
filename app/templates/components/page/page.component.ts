import { Component, ViewChild, AfterViewInit, NgZone, OnDestroy, ElementRef } from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-pro-ui/sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from 'tns-core-modules/ui/label';

@Component({
    moduleId: module.id,
    selector: 'healthcare-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements AfterViewInit, OnDestroy {

    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

    @ViewChild('overlay') overlay: ElementRef;

    private drawer: RadSideDrawer;

    drawerVisible = false;

    constructor(
        private zone: NgZone,
        page: Page) {
        page.backgroundSpanUnderStatusBar = true;
        page.actionBarHidden = true;
    }

    ngAfterViewInit() {

        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.on(RadSideDrawer.drawerClosingEvent, () => {
            this.zone.run(() => {
                this.drawerVisible = false;
            });
        });
        this.drawer.on(RadSideDrawer.drawerOpeningEvent, () => {
            this.zone.run(() => {
                this.drawerVisible = true;
                setTimeout(() => {
                    this.animateOverlay();
                });
            });
        });
    }

    ngOnDestroy() {
        this.drawer.off(RadSideDrawer.drawerClosingEvent);
        this.drawer.off(RadSideDrawer.drawerOpeningEvent);
    }

    toggleDrawer(): void {
        this.drawer.showDrawer();
    }

    hideDrawer(): void {
        this.drawer.closeDrawer();
    }

    private animateOverlay(): void {
        const label = this.overlay.nativeElement as Label;
        label.animate({
            opacity: 0.4,
            duration: 500
        });
    }

}
