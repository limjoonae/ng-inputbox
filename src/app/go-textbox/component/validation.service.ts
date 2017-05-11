import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  validateEmail(value: string): boolean { 
    let pattern = /^[a-z0-9](\.?[a-z0-9_-])*@[a-z0-9]+\.([a-z]{2,3}\.)?[a-z]{2,4}$/g;
    return (value == '' || pattern.test(value))? true : false;
  }

  validateNumber(value: string): boolean {
    let pattern = /^-?([0-9]\d*)$/;
    return (value == '' || pattern.test(value))? true : false;
  }

  validateCurrency(value: string): boolean {
    let pattern = /^-?(([0-9]\d*)(\.[0-9]\d*){0,1})$/;
    return (value == '' || pattern.test(value))? true : false;
  }

  validateWithCustomRegExp(regExp: RegExp, value: string): boolean {
    let pattern = regExp;
    return (value == '' || pattern.test(value))? true : false;
  }
}
