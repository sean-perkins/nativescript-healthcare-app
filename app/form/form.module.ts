import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { CommonModule } from '@angular/common';
import { NSMaterialIconsModule } from '../material-icons/material-icons.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NSMaterialIconsModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        InputBoxComponent
    ],
    exports: [
        InputBoxComponent,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HealthcareFormsModule { }
