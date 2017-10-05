import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
    moduleId: module.id,
    selector: 'healthcare-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    submitted = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.initializeForm();
    }

    attemptLogin(): void {
        this.submitted = true;
        dialogs.alert(JSON.stringify(this.form.value));
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

}
