import { Component, Input, AfterViewInit, ElementRef, ViewChild, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { TextField } from 'tns-core-modules/ui/text-field';
import { Label } from 'tns-core-modules/ui/label';

import * as platform from 'tns-core-modules/platform';
import * as enums from 'tns-core-modules/ui/enums';

@Component({
    moduleId: module.id,
    selector: 'healthcare-input-box',
    templateUrl: './input-box.component.html',
    styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements AfterViewInit, OnDestroy, OnChanges {
    // The desired row to render the element on
    @Input() row = 0;
    // The form control (used for validation styling)
    @Input() control: FormControl;
    // The submitted state of the parent form
    @Input() submitted = false;
    // Custom classes to pass through to the inner-grid
    @Input('class') customClasses: string;
    // Element reference to the checkmark icon (valid icon)
    @ViewChild('checkmark') checkmark: ElementRef;
    // Element reference to the close icon (invalid icon)
    @ViewChild('error') error: ElementRef;
    // Subject to unsubscribe hot listeners
    private destroy$: Subject<boolean> = new Subject();
    // The validity of the form control
    isValid = false;

    constructor(private element: ElementRef) { }

    ngAfterViewInit() {
        const textField = this.element.nativeElement.getChildAt(0).getChildAt(2) as TextField;
        const indicator = this.element.nativeElement.getChildAt(0).getChildAt(3) as Label;
        textField.on('focus', () => {
            this.animateBorder(indicator);
        });
        textField.on('blur', () => {
            this.animateBorder(indicator, true);
            if (this.isValid) {
                this.animateIcon(this.checkmark.nativeElement);
            }
            else {
                if (this.submitted) {
                    this.animateIcon(this.error.nativeElement);
                }
            }
        });

        // Control subscriptions are hot-changes compared to two-way bind (doesn't detect deep changes)
        this.control.statusChanges
            .takeUntil(this.destroy$)
            .map(res => res === 'VALID')
            .do(isValid => {
                this.isValid = isValid;
            })
            .subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.submitted) {
            if (changes.submitted.currentValue === true) {
                if (!this.isValid) {
                    this.animateIcon(this.error.nativeElement);
                }
            }
        }
    }

    /**
     * Animates an icon's opacity and scale to create a pulse effect
     * @param icon The icon to animate into the frame
     */
    private animateIcon(icon: Label): void {
        if (icon == this.checkmark.nativeElement) {
            this.hideIcon(this.error.nativeElement);
        }
        else {
            this.hideIcon(this.checkmark.nativeElement);
        }
        icon.animate({
            opacity: 1,
            scale: {
                x: 1.5,
                y: 1.5
            },
            curve: enums.AnimationCurve.easeInOut,
            duration: 500
        }).then(() => {
            icon.animate({
                scale: {
                    x: 1,
                    y: 1
                },
                duration: 300
            });
        });
    }

    /**
     * Hides an icon element from the view
     * @param icon The icon to hide immediately
     */
    private hideIcon(icon: Label): void {
        icon.animate({ opacity: 0, duration: 0 });
    }

    /**
     * Animates the underline border for the form control
     * @param borderEl The border element to animate
     * @param inverse To reverse the animation (out animation)
     */
    private animateBorder(borderEl: Label, inverse = false): void {
        borderEl.animate({
            translate: {
                x: (inverse ? -1 : 0) * platform.screen.mainScreen.widthDIPs,
                y: 0
            },
            opacity: inverse ? 0 : 1,
            duration: 500,
            curve: inverse ? enums.AnimationCurve.easeOut : enums.AnimationCurve.easeIn
        });
    }

    /**
     * Animate the border off the screen an equal distance of the screen width
     */
    get borderOffset(): string {
        return `transform: translateX(${-1 * platform.screen.mainScreen.widthDIPs})`;
    }

}
