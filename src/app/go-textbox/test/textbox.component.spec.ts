/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabelComponent } from '../../go-label/component/label.component';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective } from '../../go-directive/component/index';
import { TextboxComponent } from '../component/textbox.component';

describe('TextboxComponent', () => {
  // let de: DebugElement;
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TextboxComponent,
        LabelComponent,
        CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective,
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => { 
      fixture = TestBed.createComponent(TextboxComponent);
      component = fixture.componentInstance;
    });
    // de = fixture.debugElement.query(By.css('h1'));
  }));

  // it('should create component', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(`clearFormat() : should have aftervalue is '111111.00' when inputvalue is '111,111.00'`, () => {
  //   component.clearFormat('111,111.00')
  //   expect(component.defaultValue).toBe('111111.00');
  // });

  // it(`clearFormat() : should have aftervalue is '555' when inputvalue is '555'`, () => {
  //   component.clearFormat('555')
  //   expect(component.defaultValue).toBe('555');
  // });

  // it(`validateInteger() : should have warning message return when input is '11as222'`, () => {
  //   component.validateInteger('11as222')
  //   expect(component.warningMsgReturn).toBe('');
  // });
});

