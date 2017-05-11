import { Injectable } from '@angular/core';
const numeral = require('numeral');

@Injectable()
export class TransformService {

  constructor() { }

  toCurrencyFormat(value: string, customFormat?: string): string {
    let defaultFormat = '0,0.00';
    if(value != '')
      if(customFormat == null || customFormat == ''){
        return numeral(value).format(defaultFormat);
      } else {
        return numeral(value).format(customFormat);
      }
    return '';
  }

  toNumberFormat(value: string): string {
    if(value != '')
      return numeral(value).format('0');
    return '';
  }

  toClearFormat(value: string, stringToClear: RegExp): string {
    if(value != '')
      return value.replace(stringToClear, '');
    return '';
  }

}
