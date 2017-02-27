import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ng2-bootstrap';
import { TextboxComponent } from './component/textbox.component';
import { TransformService } from './component/transform.service';
import { ValidationService } from './component/validation.service';
import { BootstrapClassService, CommonService } from 'gos-service';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomRequiredDirective } from 'gos-directive';

@NgModule({
  imports: [CommonModule,TooltipModule.forRoot()],
  declarations: [
    TextboxComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomRequiredDirective,
  ],
  exports: [TextboxComponent]
})
export class TextboxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TextboxModule,
      providers: [ TransformService, ValidationService, BootstrapClassService, CommonService]
    }
  }
}