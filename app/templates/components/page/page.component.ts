import { Component, ViewChild, AfterViewInit, NgZone, OnDestroy, ElementRef } from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-pro-ui/sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from 'tns-core-modules/ui/label';
/**
 * Custom Page Implementation
 * Allows us to project content inside the side drawer template
 * @author Sean Perkins <sean-perkins>
 */
@Component({
    moduleId: module.id,
    selector: 'healthcare-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements AfterViewInit, OnDestroy {
    // Element reference to the side drawer component
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    // The element reference to the background overlay label
    @ViewChild('overlay') overlay: ElementRef;
    // Reference reference to the side drawer element
    private drawer: RadSideDrawer;
    // Visibility state of the side drawer
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
        // Clean up event listeners
        this.drawer.off(RadSideDrawer.drawerClosingEvent);
        this.drawer.off(RadSideDrawer.drawerOpeningEvent);
    }

    /**
     * Shows the side drawer from the left-hand side
     */
    showDrawer(): void {
        this.drawer.showDrawer();
    }

    /**
     * Dismisses the side-drawer from the screen
     */
    hideDrawer(): void {
        this.drawer.closeDrawer();
    }

    /**
     * Animates the background overlay to create a backdrop on the existing content
     */
    private animateOverlay(): void {
        const label = this.overlay.nativeElement as Label;
        label.animate({
            opacity: 0.8,
            duration: 500
        });
    }

}
