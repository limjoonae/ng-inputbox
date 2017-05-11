import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { BootstrapClassService, CommonService } from '../../go-service/component/index';
import { ValidationService } from './validation.service';
import { TransformService } from './transform.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const TEXTBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextboxComponent),
  multi: true
};

@Component({
  selector: 'go-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  providers: [TEXTBOX_VALUE_ACCESSOR, BootstrapClassService, CommonService, ValidationService, TransformService]
})
export class TextboxComponent implements OnInit, ControlValueAccessor {

  value: string;
  inputFieldValue: string;
  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};
  focus: boolean;
  classPrefix = 'alert';
  colorClass: string;
  warningMsgReturn: string;
  warningMsg: string;
  space = ' ';
  hasClass = '';
  hasFormControlClass = '';

  @Input() goId: string;
  @Input() type: string;
  @Input() disable: any;
  @Input() readonly: string;
  @Input() maxlength: string;
  @Input() placeholder: string;
  @Input() colorTheme: string;
  @Input() warningText: string;
  @Input() numberFormat: string;
  @Input() customRegExp: RegExp;
  @Input() isValid: boolean = true;
  @Input() required: boolean;
  @Input() warningPos = 'top';

  @Output() isValidChange = new EventEmitter<boolean>();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  constructor(
    private _bootstrapClassService: BootstrapClassService,
    private _commonService: CommonService,
    private _validationService: ValidationService,
    private _transformStringNumber: TransformService, ) { }

  ngOnInit() {
    this.colorClass = this.setStyleClass(this.colorTheme, this.classPrefix);
    this.placeholder = this._commonService.isNull(this.placeholder) ? '' : this.placeholder;
    this.isValidChange.emit(this.isValid);
    this.warningMsg = this._commonService.isNull(this.warningText) ? 'please input valid '.concat(this.type) : this.warningText;
  }

//// ControlValueAccessor implementation
  writeValue(value) : void {
    if(this.type == 'currency') {
      this.value = this.getCurrencyFormat(value);
    } else {
      this.value = value;
    }
      this.updateInputfield();
  }
  
  registerOnChange(fn: Function): void {
      this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
      this.onModelTouched = fn;
  }
  
  setDisabledState(val: boolean): void {
      this.disable = val;
  }
//// End ControlValueAccessor implementation

  updateInputfield() {
      if(this.value) {
          this.inputFieldValue = this.value;
      }
      else {
          this.inputFieldValue = '';
      }
  }

  updateModel() {
      this.onModelChange(this.value);
  }

  onInputFocus(input, event) {
      let val = event.target.value;
      let type = input.type;
      this.focus = true;
      this.onFocus.emit(event);
      if(val == ''){
        this.setNormalBorder();
      }
      if(this.type == 'currency') {
        this.inputFieldValue = this.clearFormat(val);
      }
  }

  onInputBlur(event) {
    let val = event.target.value;
    let required = event.target.required;
    if(val == '' && required) {
      this.setRequireBorder();
    } else {
      this.validateInput(val);
    }

    this.focus = false;
    this.onBlur.emit(event);
    this.updateInputfield();
    this.onModelTouched();
  }

  onInput(event) {  
      let val = event.target.value;  
      try {
          this.validateInput(val);
          this.value = val;
      } 
      catch(err) {
          this.value = null;
      }
      this.updateModel();
  }

  validateInput(val) {
    switch (this.type) {
        case "email":
          this.validateEmail(val);
          break;
        case "number":
          this.validateNumber(val);
          break;
        case "currency":
          this.validateCurrency(val);
          break;
        default:
          this.customValidate(val);
      }
  }

  setValidationStyle(validationResult: boolean): void {
    !validationResult ? (this.hasClass = 'has-warning') &&  (this.hasFormControlClass = 'form-control-warning') : (this.hasClass = '') &&  (this.hasFormControlClass = '');
  }

  setRequireBorder(): void {
      this.hasClass = 'has-danger';
      this.hasFormControlClass = 'form-control-danger';
  }

  setNormalBorder(): void{
      this.hasClass = '';
      this.hasFormControlClass = '';
  }

  clearFormat(value: string): any {
    let stringToClear = /,/g;
    return this._transformStringNumber.toClearFormat(value, stringToClear);
  }

  getNumberFormat(value: string): string {
    return this._transformStringNumber.toNumberFormat(value);
  }

  getCurrencyFormat(value: any): any {
    return this._transformStringNumber.toCurrencyFormat(value, this.numberFormat);
  }

  setStyleClass(styleClass: string, prefix: string): string {
    return this._commonService.isNull(styleClass) ? '' : prefix.concat(this.space) + this._bootstrapClassService.setStyleClass(styleClass, prefix);
  }

  returnWarningMessage(validationResult: boolean): string {
    return validationResult ? '' : this.warningMsg;
  }

  customValidate(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? true : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = this.returnWarningMessage(isValid);
    this.setValidationStyle(isValid);
    this.isValidChange.emit(isValid);
  }

  validateEmail(value: string): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateEmail(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = this.returnWarningMessage(isValid);
    this.setValidationStyle(isValid);
    this.isValidChange.emit(isValid);
  }

  validateNumber(value: any): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateNumber(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = this.returnWarningMessage(isValid);
    this.setValidationStyle(isValid);
    this.isValidChange.emit(isValid);
  }

  validateCurrency(value: any): void {
    let isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateCurrency(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
    this.warningMsgReturn = this.returnWarningMessage(isValid);
    this.setValidationStyle(isValid);
    isValid ? this.value = this.getCurrencyFormat(value) : this.value = value; 
    this.isValidChange.emit(isValid);
  }

}
