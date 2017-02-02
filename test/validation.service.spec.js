/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var validation_service_1 = require('../component/validation.service');
describe('Service: ValidationService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_service_1.ValidationService]
        });
    });
    it('should create', testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
describe('Service: ValidationService => validateEmail', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_service_1.ValidationService]
        });
    });
    it("should define function 'validateEmail'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateEmail).toBeDefined();
    }));
    it("should return true when email is 'example_123@email.com'.", testing_1.inject([validation_service_1.ValidationService], function (service) {
        var emailinput = 'example_123@email.com';
        expect(service.validateEmail(emailinput)).toBe(true);
    }));
    it("should return true when email is 'example_123@email.co.uk'.", testing_1.inject([validation_service_1.ValidationService], function (service) {
        var emailinput = 'example_123@email.co.uk';
        expect(service.validateEmail(emailinput)).toBe(true);
    }));
    it("should return false when email is '_example@email.com.", testing_1.inject([validation_service_1.ValidationService], function (service) {
        var emailinput = '_example@email.com';
        expect(service.validateEmail(emailinput)).toBe(false);
    }));
    it("should return false when email is 'example@email'.", testing_1.inject([validation_service_1.ValidationService], function (service) {
        var emailinput = 'example@email';
        expect(service.validateEmail(emailinput)).toBe(false);
    }));
});
describe('Service: ValidationService => validateInteger', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_service_1.ValidationService]
        });
    });
    it("should define function 'validateInteger'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateInteger).toBeDefined();
    }));
    it("should return true if input contain 0-9", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateInteger('123456789000')).toBe(true);
    }));
    it("should return false if input contain any character out 0-9", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateInteger('12cd345')).toBe(false);
    }));
});
describe('Service: ValidationService => validateNumber', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_service_1.ValidationService]
        });
    });
    it("should define function 'validateNumber'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateNumber).toBeDefined();
    }));
    it("should return true if input is '12000.0058'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateNumber('12000.0058')).toBe(true);
    }));
    it("should return true if input is '000.0058'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateNumber('000.0058')).toBe(true);
    }));
    it("should return true if input is '000.0000'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateNumber('000.0000')).toBe(true);
    }));
    it("should return false if input is '00hello000'", testing_1.inject([validation_service_1.ValidationService], function (service) {
        expect(service.validateNumber('00hello000')).toBe(false);
    }));
});
//# sourceMappingURL=validation.service.spec.js.map