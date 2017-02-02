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
var TransformService = (function () {
    function TransformService() {
        this.numeral = require('numeral');
    }
    TransformService.prototype.toNumberFormat = function (value, customFormat) {
        var defaultFormat = '0,0.00';
        if (value != '')
            if (customFormat == null || customFormat == '') {
                return this.numeral(value).format(defaultFormat);
            }
            else {
                return this.numeral(value).format(customFormat);
            }
        return '';
    };
    TransformService.prototype.toIntegerFormat = function (value) {
        if (value != '')
            return this.numeral(value).format('0');
        return '';
    };
    TransformService.prototype.toClearFormat = function (value, stringToClear) {
        if (value != '')
            return value.replace(stringToClear, '');
        return '';
    };
    TransformService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TransformService);
    return TransformService;
}());
exports.TransformService = TransformService;
//# sourceMappingURL=transform.service.js.map