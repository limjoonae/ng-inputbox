"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var gos_label_1 = require('gos-label');
var gos_directive_1 = require('gos-directive');
var textbox_component_1 = require('../component/textbox.component');
describe('TextboxComponent', function () {
    // let de: DebugElement;
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                textbox_component_1.TextboxComponent,
                gos_label_1.LabelComponent,
                gos_directive_1.CustomDisabledDirective, gos_directive_1.CustomReadonlyDirective, gos_directive_1.CustomMaxlengthDirective,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(textbox_component_1.TextboxComponent);
        component = fixture.componentInstance;
        // de = fixture.debugElement.query(By.css('h1'));
    });
    it('should create component', function () {
        expect(component).toBeTruthy();
    });
    it("clearFormat() : should have aftervalue is '111111.00' when inputvalue is '111,111.00'", function () {
        component.clearFormat('111,111.00');
        expect(component.defaultValue).toBe('111111.00');
    });
    it("clearFormat() : should have aftervalue is '555' when inputvalue is '555'", function () {
        component.clearFormat('555');
        expect(component.defaultValue).toBe('555');
    });
    // it(`validateInteger() : should have warning message return when input is '11as222'`, () => {
    //   component.validateInteger('11as222')
    //   expect(component.warningMsgReturn).toBe('');
    // });
});
//# sourceMappingURL=textbox.component.spec.js.map