import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';

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
        private routerExt: RouterExtensions,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.initializeForm();
    }

    attemptLogin(): void {
        this.submitted = true;
        // dialogs.alert(JSON.stringify(this.form.value));
        // if (this.form.valid) {
        // TODO temporary - move all to reactive state
        this.routerExt.navigate(['/dashboard'], { clearHistory: true });
        // }
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

}
