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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var textbox_component_1 = require('./textbox.component');
var transform_service_1 = require('./transform.service');
var validation_service_1 = require('./validation.service');
var gos_service_1 = require('gos-service');
var gos_directive_1 = require('gos-directive');
var TextboxModule = (function () {
    function TextboxModule() {
    }
    TextboxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng2_bootstrap_1.TooltipModule.forRoot()],
            declarations: [
                textbox_component_1.TextboxComponent,
                gos_directive_1.CustomDisabledDirective, gos_directive_1.CustomReadonlyDirective, gos_directive_1.CustomMaxlengthDirective, gos_directive_1.CustomRequiredDirective,
            ],
            providers: [transform_service_1.TransformService, validation_service_1.ValidationService, gos_service_1.BootstrapClassService, gos_service_1.CommonService],
            exports: [textbox_component_1.TextboxComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TextboxModule);
    return TextboxModule;
}());
exports.TextboxModule = TextboxModule;
//# sourceMappingURL=textbox.module.js.map