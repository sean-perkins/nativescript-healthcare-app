import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as auth from '../../../common/actions/auth';

@Component({
    moduleId: module.id,
    selector: 'healthcare-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    submitted: boolean;

    constructor(
        page: Page,
        private store$: Store<any>,
        private fb: FormBuilder) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        this.initializeForm();
    }

    handleRegister(): void {
        this.submitted = true;
        if (this.form.valid) {
            this.store$.dispatch(new auth.Register(this.form.value));
        }
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
