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
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateEmail = function (value) {
        var pattern = /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/g;
        return (value == '' || pattern.test(value)) ? true : false;
    };
    ValidationService.prototype.validateInteger = function (value) {
        var pattern = /^-?([0-9]\d*)$/;
        return (value == '' || pattern.test(value)) ? true : false;
    };
    ValidationService.prototype.validateNumber = function (value) {
        var pattern = /^-?(([0-9]\d*)(\.[0-9]\d*){0,1})$/;
        return (value == '' || pattern.test(value)) ? true : false;
    };
    ValidationService.prototype.validateWithCustomRegExp = function (regExp, value) {
        console.log('regExp: ' + regExp);
        console.log('value: ' + value);
        var pattern = regExp;
        return (value == '' || pattern.test(value)) ? true : false;
    };
    ValidationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map