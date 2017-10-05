import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialIconsDirective } from './directives/material-icons.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MaterialIconsDirective],
    exports: [MaterialIconsDirective],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NSMaterialIconsModule { }
