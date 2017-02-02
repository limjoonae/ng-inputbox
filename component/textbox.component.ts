import { Component, OnInit, Input } from '@angular/core';
import { BootstrapClassService, CommonService } from 'gos-service';
import { ValidationService } from './validation.service';
import { TransformService } from './transform.service';

@Component({
  moduleId: module.id,
  selector: 'gos-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  providers: [ BootstrapClassService, CommonService, ValidationService, TransformService]
})
export class TextboxComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() type: string;
  @Input() label: string;
  @Input() require: string;
  @Input() disable: string;
  @Input() readonly: string;
  @Input() maxlength: string;
  @Input() defaultValue: string;
  @Input() placeholder: string;
  @Input() colorTheme: string;
  @Input() warningText: string;
  @Input() numberFormat: string;
  @Input() customRegExp: RegExp;
  private classPrefix = 'alert';
  private defaultText: string;
  private colorClass: string;
  private warningMsgReturn: string;
  private warningMsg: string;
  private space = ' ';

  constructor(
    private _bootstrapClassService: BootstrapClassService,
              private _commonService: CommonService,
              private _validationService: ValidationService,
              private _transformStringNumber: TransformService) { }

  ngOnInit() {
    this.colorClass = this.setStyleClass(this.colorTheme, this.classPrefix);
    this.placeholder = this._commonService.isNull(this.placeholder)? '' : this.placeholder;
    this.defaultText = this._commonService.isNull(this.defaultValue)? '' : this.defaultValue;
    this.warningMsg = this._commonService.isNull(this.warningText)? 'please input valid '.concat(this.type) : this.warningText;
  }
  
  clearFormat(value: string): void {
    let stringToClear = /,/g;
    this.defaultText = this._transformStringNumber.toClearFormat(value, stringToClear);
  }
  
  getIntegerFormat(value: string): string {
    return this._transformStringNumber.toIntegerFormat(value);
  }

  getNumberFormat(value: string): string {
    return this._transformStringNumber.toNumberFormat(value, this.numberFormat);
  }

  setStyleClass(styleClass: string, prefix:string): string {
      return this._commonService.isNull(styleClass)? '' : prefix.concat(this.space) + this._bootstrapClassService.setStyleClass(styleClass, prefix);
  }

  customValidate(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp)? true : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = isValid? '' : this.warningMsg;
  }

  validateEmail(value: string): void { 
    let isValid = this._commonService.isNull(this.customRegExp)? this._validationService.validateEmail(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = isValid? '' : this.warningMsg;
  }

  validateInteger(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp)? this._validationService.validateInteger(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    if(isValid){
      this.warningMsgReturn = '';
      this.defaultText = this.getIntegerFormat(value);
    } else { 
      this.warningMsgReturn = this.warningMsg;
    }
  }

  validateNumber(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp)? this._validationService.validateNumber(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    if(isValid) {
      this.warningMsgReturn = ''; 
      this.defaultText = this.getNumberFormat(value);
    } else { 
      this.warningMsgReturn = this.warningMsg;
    }
  }

}
