/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidationService } from '../component/validation.service';

describe('Service: ValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationService]
    });
  });

  it('should create service', inject([ValidationService], (service: ValidationService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Service: ValidationService => validateEmail', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ValidationService]
      });
    });
    it(`should define function 'validateEmail'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateEmail).toBeDefined();
    }));

    it(`should return true when email is 'example_123@email.com'`, inject([ValidationService], (service: ValidationService) => {
      let emailinput = 'example_123@email.com';
      expect(service.validateEmail(emailinput)).toBe(true);
    }));

    it(`should return true when email is 'example_123@email.co.uk'`, inject([ValidationService], (service: ValidationService) => {
      let emailinput = 'example_123@email.co.uk';
      expect(service.validateEmail(emailinput)).toBe(true);
    }));

    it(`should return false when email is '_example@email.com'`, inject([ValidationService], (service: ValidationService) => {
      let emailinput = '_example@email.com';
      expect(service.validateEmail(emailinput,)).toBe(false);
    }));

    it(`should return false when email is 'example@email'`, inject([ValidationService], (service: ValidationService) => {
      let emailinput = 'example@email';
      expect(service.validateEmail(emailinput,)).toBe(false);
    }));

});

describe('Service: ValidationService => validateNumber', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ValidationService]
      });
    });
    it(`should define function 'validateNumber'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateNumber).toBeDefined();
    }));

    it(`should return true if input contain 0-9`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateNumber('123456789000')).toBe(true);
    }));

    it(`should return false if input is '12cd345' (contain another character)`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateNumber('12cd345')).toBe(false);
    }));

});

describe('Service: ValidationService => validateCurrency', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ValidationService]
      });
    });

    it(`should define function 'validateCurrency'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateCurrency).toBeDefined();
    }));

    it(`should return true if input is '12000.0058'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateCurrency('12000.0058')).toBe(true);
    }));

    it(`should return true if input is '000.0058'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateCurrency('000.0058')).toBe(true);
    }));

    it(`should return true if input is '000.0000'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateCurrency('000.0000')).toBe(true);
    }));

    it(`should return false if input is '00hello000'`, inject([ValidationService], (service: ValidationService) => {
      expect(service.validateCurrency('00hello000')).toBe(false);
    }));

});