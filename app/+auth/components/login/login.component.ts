import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Page } from 'tns-core-modules/ui/page';

import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';

import * as auth from '../../../common/actions/auth';

@Component({
    moduleId: module.id,
    selector: 'healthcare-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    submitted = false;

    constructor(
        page: Page,
        private routerExt: RouterExtensions,
        private store$: Store<any>,
        private fb: FormBuilder) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        this.initializeForm();
    }

    attemptLogin(): void {
        this.submitted = true;
        // dialogs.alert(JSON.stringify(this.form.value));
        // if (this.form.valid) {
        // TODO temporary - move all to reactive state
        // }

        this.store$.dispatch(new auth.Login(this.form.value));
        // this.routerExt.navigate(['/app/dashboard'], { clearHistory: true });
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

}
