import { NgModule } from '@angular/core';

import { HealthcareFormsModule } from './form/form.module';
import { NSMaterialIconsModule } from './material-icons/material-icons.module';

@NgModule({
    exports: [
        HealthcareFormsModule,
        NSMaterialIconsModule
    ]
})
export class SharedModule { }
