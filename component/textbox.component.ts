import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BootstrapClassService, CommonService } from 'go-service';
import { ValidationService } from './validation.service';
import { TransformService } from './transform.service';

@Component({
  moduleId: module.id,
  selector: 'go-textbox',
  templateUrl: './textbox.component.html',
  styles: [`i.textbox-warning{margin-left:0.25rem;cursor:help;color:#ffa500;}`],
  providers: [BootstrapClassService, CommonService, ValidationService, TransformService]
})
export class TextboxComponent implements OnInit {

  @Input() goId: string;
  @Input() goName: string;
  @Input() hiddenLabel: string;
  @Input() type: string;
  @Input() label: string;
  @Input() require: string;
  @Input() disable: string;
  @Input() readonly: string;
  @Input() maxlength: string;
  @Input() defaultValue: any;
  @Output() defaultValueChange = new EventEmitter<string>();
  @Input() isValid: boolean;
  @Output() isValidChange = new EventEmitter<boolean>();
  @Input() placeholder: string;
  @Input() colorTheme: string;
  @Input() warningText: string;
  @Input() numberFormat: string;
  @Input() customRegExp: RegExp;
  public numberWithFormat: any;
  public classPrefix = 'alert';
  public colorClass: string;
  public warningMsgReturn: string;
  public warningMsg: string;
  public space = ' ';

  constructor(
    private _bootstrapClassService: BootstrapClassService,
    private _commonService: CommonService,
    private _validationService: ValidationService,
    private _transformStringNumber: TransformService, ) { }

  ngOnInit() {
    this.colorClass = this.setStyleClass(this.colorTheme, this.classPrefix);
    this.placeholder = this._commonService.isNull(this.placeholder) ? '' : this.placeholder;
    this.defaultValueChange.emit(this.defaultValue);
    this.isValidChange.emit(this.isValid);
    this.defaultValue = this.returnDefaultValueOnInit(this.defaultValue);
    this.numberWithFormat = this.defaultValue;
    this.warningMsg = this._commonService.isNull(this.warningText) ? 'please input valid '.concat(this.type) : this.warningText;
  }

  returnDefaultValueOnInit(value: any): any {
    if (this._commonService.isNull(this.defaultValue)) {
      value = '';
    } else if (this.type == 'integer') {
      value = this.getIntegerFormat(this.defaultValue);
    } else if (this.type == 'number') {
      value = this.getNumberFormat(this.defaultValue);
    } else {
      value = this.defaultValue;
    }
    return value;
  }

  clearFormat(value: string): void {
    let stringToClear = /,/g;
    this.defaultValue = this._transformStringNumber.toClearFormat(value, stringToClear);
    this.defaultValueChange.emit(this.defaultValue);
  }

  getIntegerFormat(value: string): string {
    return this._transformStringNumber.toIntegerFormat(value);
  }

  getNumberFormat(value: any): any {
    return this._transformStringNumber.toNumberFormat(value, this.numberFormat);
  }

  setStyleClass(styleClass: string, prefix: string): string {
    return this._commonService.isNull(styleClass) ? '' : prefix.concat(this.space) + this._bootstrapClassService.setStyleClass(styleClass, prefix);
  }

  customValidate(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? true : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = isValid ? '' : this.warningMsg;
    this.defaultValueChange.emit(value);
    this.isValidChange.emit(isValid);
  }

  validateEmail(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateEmail(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = isValid ? '' : this.warningMsg;
    this.defaultValueChange.emit(value);
    this.isValidChange.emit(isValid);
  }

  validateInteger(value: any): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateInteger(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.defaultValueChange.emit(value);
    if (isValid) {
      this.warningMsgReturn = '';
      this.defaultValue = this.getIntegerFormat(value);
    } else {
      this.warningMsgReturn = this.warningMsg;
    }
    this.isValidChange.emit(isValid);
  }

  validateNumber(value: any): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateNumber(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.defaultValueChange.emit(value);
    if (isValid) {
      this.warningMsgReturn = '';
      this.numberWithFormat = this.getNumberFormat(value);
    } else {
      this.warningMsgReturn = this.warningMsg;
      this.numberWithFormat = value;
    }
    this.isValidChange.emit(isValid);
  }

}
