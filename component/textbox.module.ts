import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ng2-bootstrap';
import { TextboxComponent } from './textbox.component';
import { TransformService } from './transform.service';
import { ValidationService } from './validation.service';
import { BootstrapClassService, CommonService } from 'gos-service';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomRequiredDirective } from 'gos-directive';

@NgModule({
  imports: [CommonModule,TooltipModule.forRoot()],
  declarations: [
    TextboxComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomRequiredDirective,
  ],
  providers: [ TransformService, ValidationService, BootstrapClassService, CommonService],
  exports: [TextboxComponent]
})
export class TextboxModule {}