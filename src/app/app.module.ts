import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { TextboxComponent } from './go-textbox/component/textbox.component';
import { LabelComponent } from './go-label/component/label.component';
import { CustomCheckDirective, CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective } from './go-directive/component/index';

import { TextboxDocument } from './go-textbox/doc/textbox.document';

@NgModule({
  imports:      [ 
    BrowserModule,
    TooltipModule.forRoot(), 
    RouterModule.forRoot([
      {path: '', component: TextboxDocument}
    ])
  ],
  declarations: [ 
    AppComponent,
    TextboxComponent, 
    LabelComponent,
    CustomCheckDirective, CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective,
    TextboxDocument,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
