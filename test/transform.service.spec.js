/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var transform_service_1 = require('../component/transform.service');
describe('Service: TransformService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [transform_service_1.TransformService]
        });
    });
    it('should create', testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service).toBeTruthy();
    }));
});
describe('Service: TransformService => toNumberFormat', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [transform_service_1.TransformService]
        });
    });
    it("should define function 'toNumberFormat'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat).toBeDefined();
    }));
    it("should return '1,000.00' when input equal '1000'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('1000')).toBe('1,000.00');
    }));
    it("should return '1,000.00' when input equal '1000.004'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('1000.004')).toBe('1,000.00');
    }));
    it("should return '1,000.00' when input equal '1000.005'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('1000.005')).toBe('1,000.01');
    }));
    it("should return '1,000.01' when input equal '1000.006'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('1000.006')).toBe('1,000.01');
    }));
    it("should return '1,000.00' when input equal '001000.00'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('001000.00')).toBe('1,000.00');
    }));
    it("should return '1,000.00' when input equal '1000.0000'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('1000.0000')).toBe('1,000.00');
    }));
    it("should return '1,000.00' when input equal '1000.0045'", testing_1.inject([transform_service_1.TransformService], function (service) {
        expect(service.toNumberFormat('1000.0045')).toBe('1,000.00');
    }));
});
//# sourceMappingURL=transform.service.spec.js.map