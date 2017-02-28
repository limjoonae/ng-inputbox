import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ng2-bootstrap';
import { TextboxComponent } from './component/textbox.component';
import { TransformService } from './component/transform.service';
import { ValidationService } from './component/validation.service';
import { LabelComponent } from 'go-label';
import { BootstrapClassService, CommonService } from 'go-service';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective } from 'go-directive';

@NgModule({
  imports: [CommonModule,TooltipModule.forRoot()],
  declarations: [
    TextboxComponent, LabelComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective
  ],
  exports: [TextboxComponent, LabelComponent]
})
export class TextboxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TextboxModule,
      providers: [ TransformService, ValidationService, BootstrapClassService, CommonService]
    }
  }
}