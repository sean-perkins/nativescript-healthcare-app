import { NgModule } from '@angular/core';

import { HealthcareFormsModule } from './form/form.module';
import { NSMaterialIconsModule } from './material-icons/material-icons.module';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
    exports: [
        HealthcareFormsModule,
        NSMaterialIconsModule,
        TemplatesModule
    ]
})
export class SharedModule { }
