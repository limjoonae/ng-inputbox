import { Component, OnInit, Input } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'type', type: 'text', description: `ใช้ระบุประเภทข้อมูลของ textbox ประกอบด้วย
        text, password, number, currency, email, hidden`},
    { require: '*', name: '[(ngModel)]', type: 'any', description: `ใช้สำหรับรับ/ส่งค่าระหว่าง textbox และตัวแปรที่ระบุ เพื่อนำค่าที่ได้ไปใช้งานต่อ (two-way data binding)`},
    { require: '', name: 'name', type: 'text', description: `สำหรับตั้งชื่อให้ textbox ระบุเมื่อใช้งานร่วมกับ form`},
    { require: '', name: 'required', type: 'boolean', description: `ใช้ระบุเมื่อเป็น textbox ที่จำเป็นต้องระบุค่า สามารถใช้งานร่วมกับ form validation ได้`},
    { require: '', name: '#name', type: 'text', description: `เป็น template variable ซึ่งต้องมีค่า ="ngModel" เสมอ เป็นตัวตรวจจับสถานะของ component เช่น valid หรือไม่ ใช้งานร่วมกับ form validation`},
    { require: '', name: 'goId', type: 'text', description: `ใช้ระบุ id ของ textbox`},
    { require: '', name: 'isValid', type: 'boolean', description: `ใช้รับส่งผลการ validate ข้อมูลผ่านตัวแปรที่ระบุใน attribute นี้`},
    { require: '', name: 'numberFormat', type: 'format', description: `ใช้กำหนด format การแสดงตัวเลขของ textbox type="currency"`},
    { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน textbox โดย
        หากระบุค่า disable="true" จะไม่สามารถใช้งานหรือ copy ข้อความใน textbox ได้`},
    { require: '', name: 'readonly', type: 'boolean', description: `ใช้กำหนดให้ไม่สามารถแก้ไขข้อมูลใน text box ได้`},
    { require: '', name: 'maxlength', type: 'number', description: `ใช้กำหนดความยาวตัวอักษรสูงสุดที่สามารถพิมพ์ได้ใน text box 
        หากไม่ระบุจะมีค่า = 524288 ตัวอักษร`},
    { require: '', name: 'placeholder', type: 'text', description: `ใช้กำหนดข้อความตัวอย่างใน textbox สามารถใช้แทน label ได้`},
    { require: '', name: 'colorTheme', type: 'text', description: `ใช้กำหนดสีของ text box โดยค่าที่สามารถระบุได้ ประกอบด้วย
        success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`},
    { require: '', name: 'warningText', type: 'text', description: `ใช้กำหนดข้อความเตือนกรณีกรอกข้อมูลผิด 
        หากไม่ระบุจะแสดงข้อความเตือนตามประเภทของ text box`},
    { require: '', name: 'warningPos', type: 'text', description: `ใช้กำหนดตำแหน่งที่ต้องการให้แสดง warning message มีค่าเริ่มต้นเป็น top และค่าอื่นที่ระบุได้ประกอบด้วย right, bottom, left`},
    { require: '', name: 'customRegExp', type: 'regExp', description: `ใช้กำหนด Regular Expression สำหรับตรวจสอบข้อมูลที่ระบุใน textbox
    type: text, password`},
];

const TYPELIST: Array<any> = [
    { type: 'text', description: `สามารถระบุตัวอักษร และอักขระพิเศษต่างๆ ไม่มีการ validate เบื้องต้น`},
    { type: 'password', description: `สามารถระบุตัวอักษร และอักขระพิเศษต่างๆ ไม่มีการ validate เบื้องต้น`},
    { type: 'number', description: `รับเฉพาะตัวเลขจำนวนเต็มบวก ศูนย์ และจำนวนเต็มลบ`},
    { type: 'currency', description: `รับเฉพาะตัวเลขจำนวนเต็มบวก ศูนย์ จำนวนเต็มลบ และ จำนวนทศนิยม default format เป็น 0,0.00`},
    { type: 'email', description: `รับเฉพาะข้อมูล email format ตัวอย่าง: example@email.com, example_2@domain.co.uk`},
    { type: 'hidden', description: `ใช้ระบุข้อมูลตัวอักษร และอักขระพิเศษต่างๆ ไม่แสดงค่าใดๆบนหน้าจอ ไม่มีการ validate เบื้องต้น`},
];

const _releaseUpdate_v_2: Array<any> = [
  { head: ``, data: `เปลี่ยนวิธีการรับส่งข้อมูลจาก attribute [(defaultValue)] เป็น [(ngModel)] เพื่อให้รองรับการทำงานร่วมกับ form validation` },
  { head: ``, data: `เปลี่ยนชื่อ textbox type จาก number เป็น currency และ integer เป็น number เพื่อให้สอดคล้องตามรูปแบบของ HTML` },
  { head: ``, data: `ลบ label ออกจาก textbox เพื่อความยืดหยุ่นในการจัดวาง layout` },
  { head: ``, data: `ปรับลดความสูงของ textbox แบบมีสีให้เท่ากับ textbox แบบไม่มีสี` },
];

@Component({
  selector: 'textbox-document',
  templateUrl: './textbox.document.html',
})
export class TextboxDocument implements OnInit {

  private componentTag: string = '<go-textbox>';
  private componentDescription: string = `Text box ใช้ในการรับค่าและแสดงผลข้อมูลตามประเภทต่างๆ`;
  private version: string = '2.0';
  private releaseDate: string = '3 May 2017';
  private prefixSyntax: string = `<go-textbox `;
  private attrSyntax: string = `type="type_name" [(ngModel)]="input_variable" [name="textbox_name"] [required] [#name="ngModel"] [goId="textbox_id"]
            [format="format_pattern"] [disable="true"] [readonly="true"] [maxlength="number"] [placeholder="text"] [colorTheme="text"] [warningText="text"]
            [tooltipPos="position"] [customRegExp="regExp"]`;
  private suffixSyntax: string = `></go-textbox>`;
  private attributeList = ATTRIBUTELIST;
  private typeList = TYPELIST;
  private typeDescription = 'รายละเอียดของ text box ใน type ต่างๆดังต่อไปนี้';
  private numeralJSVersion = '2.0.4';
  private regExp = /^[a-zA-Z0-9]{8}$/g;
  private releaseUpdate_v_2: Array<any> = [
    { head: ``, data: `เปลี่ยนวิธีการรับส่งข้อมูลจาก attribute [(defaultValue)] เป็น [(ngModel)] เพื่อให้รองรับการทำงานร่วมกับ form validation` },
    { head: ``, data: `เปลี่ยนชื่อ textbox type จาก number เป็น currency และ integer เป็น number เพื่อให้สอดคล้องตามรูปแบบของ HTML` },
    { head: ``, data: `ลบ label ออกจาก textbox เพื่อความยืดหยุ่นในการจัดวาง layout` },
    { head: ``, data: `ปรับลดความสูงของ textbox แบบมีสีให้เท่ากับ textbox แบบไม่มีสี` },
  ];

  paramText = '{{userName_1}}';
  isValidFlag: boolean;
  isValidFlagText = '{{isValidFlag}}';
  isValidCustomFlag: boolean;
  isValidCustomFlagText = '{{isValidCustomFlag}}';

  basic_textbox = 'John';
  password_box: string;
  number_box = 1111;
  currency_box = 1111.22;
  currency_validate = 1111.22;
  form_validate: string;
  custom_validate: string;
  disable_textbox = 'John';
  readonly_textbox = 'John';
  required_textbox: string;
  color_textbox_1: string;
  color_textbox_2: string;
  color_textbox_3: string;
  color_textbox_4: string;

  constructor() { }

  ngOnInit() {
  }

  submitted = false;
  onSubmit(formValue: any) {
    this.submitted = true;
    console.log('formValue:',formValue);
  }
    myInput: string;

}
