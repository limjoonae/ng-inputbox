"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gos_service_1 = require('gos-service');
var validation_service_1 = require('./validation.service');
var transform_service_1 = require('./transform.service');
var TextboxComponent = (function () {
    function TextboxComponent(_bootstrapClassService, _commonService, _validationService, _transformStringNumber) {
        this._bootstrapClassService = _bootstrapClassService;
        this._commonService = _commonService;
        this._validationService = _validationService;
        this._transformStringNumber = _transformStringNumber;
        this.defaultValueChange = new core_1.EventEmitter();
        this.classPrefix = 'alert';
        this.space = ' ';
    }
    TextboxComponent.prototype.ngOnInit = function () {
        this.colorClass = this.setStyleClass(this.colorTheme, this.classPrefix);
        this.placeholder = this._commonService.isNull(this.placeholder) ? '' : this.placeholder;
        this.defaultValueChange.emit(this.defaultValue);
        this.defaultValue = this.returnDefaultValueOnInit(this.defaultValue);
        this.warningMsg = this._commonService.isNull(this.warningText) ? 'please input valid '.concat(this.type) : this.warningText;
    };
    TextboxComponent.prototype.returnDefaultValueOnInit = function (value) {
        if (this._commonService.isNull(this.defaultValue)) {
            value = '';
        }
        else if (this.type == 'integer') {
            value = this.getIntegerFormat(this.defaultValue);
        }
        else if (this.type == 'number') {
            value = this.getNumberFormat(this.defaultValue);
        }
        else {
            value = this.defaultValue;
        }
        return value;
    };
    TextboxComponent.prototype.clearFormat = function (value) {
        var stringToClear = /,/g;
        this.defaultValue = this._transformStringNumber.toClearFormat(value, stringToClear);
        this.defaultValueChange.emit(this.defaultValue);
    };
    TextboxComponent.prototype.getIntegerFormat = function (value) {
        return this._transformStringNumber.toIntegerFormat(value);
    };
    TextboxComponent.prototype.getNumberFormat = function (value) {
        return this._transformStringNumber.toNumberFormat(value, this.numberFormat);
    };
    TextboxComponent.prototype.setStyleClass = function (styleClass, prefix) {
        return this._commonService.isNull(styleClass) ? '' : prefix.concat(this.space) + this._bootstrapClassService.setStyleClass(styleClass, prefix);
    };
    TextboxComponent.prototype.customValidate = function (value) {
        var isValid = this._commonService.isNull(this.customRegExp) ? true : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
        this.warningMsgReturn = isValid ? '' : this.warningMsg;
        this.defaultValueChange.emit(value);
    };
    TextboxComponent.prototype.validateEmail = function (value) {
        var isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateEmail(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
        this.warningMsgReturn = isValid ? '' : this.warningMsg;
        this.defaultValueChange.emit(value);
    };
    TextboxComponent.prototype.validateInteger = function (value) {
        var isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateInteger(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
        this.defaultValueChange.emit(value);
        if (isValid) {
            this.warningMsgReturn = '';
            this.defaultValue = this.getIntegerFormat(value);
        }
        else {
            this.warningMsgReturn = this.warningMsg;
        }
    };
    TextboxComponent.prototype.validateNumber = function (value) {
        var isValid = this._commonService.isNull(this.customRegExp) ? this._validationService.validateNumber(value) : this._validationService.validateWithCustomRegExp(this.customRegExp, value);
        this.defaultValueChange.emit(value);
        if (isValid) {
            this.warningMsgReturn = '';
            this.defaultValue = this.getNumberFormat(value);
        }
        else {
            this.warningMsgReturn = this.warningMsg;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "require", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "disable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextboxComponent.prototype, "defaultValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TextboxComponent.prototype, "defaultValueChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "colorTheme", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "warningText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextboxComponent.prototype, "numberFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', RegExp)
    ], TextboxComponent.prototype, "customRegExp", void 0);
    TextboxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gos-textbox',
            templateUrl: './textbox.component.html',
            styleUrls: ['./textbox.component.css'],
            providers: [gos_service_1.BootstrapClassService, gos_service_1.CommonService, validation_service_1.ValidationService, transform_service_1.TransformService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof gos_service_1.BootstrapClassService !== 'undefined' && gos_service_1.BootstrapClassService) === 'function' && _a) || Object, (typeof (_b = typeof gos_service_1.CommonService !== 'undefined' && gos_service_1.CommonService) === 'function' && _b) || Object, validation_service_1.ValidationService, transform_service_1.TransformService])
    ], TextboxComponent);
    return TextboxComponent;
    var _a, _b;
}());
exports.TextboxComponent = TextboxComponent;
//# sourceMappingURL=textbox.component.js.map