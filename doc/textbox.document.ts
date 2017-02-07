import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'id', type: 'text', description: `ใช้ระบุ id ของ textbox`},
    { require: '*', name: 'name', type: 'text', description: `ใช้ระบุ name ของ textbox`},
    { require: '*', name: 'type', type: 'text', description: `ใช้ระบุประเภทข้อมูลของ textbox ประกอบด้วย
        text, password, integer, number, email, hidden`},
    { require: '', name: 'numberFormat', type: 'format', description: `ใช้ร่วมกับ textbox ที่มี type="number"`},
    { require: '', name: 'label', type: 'text', description: `ใช้สำหรับใส่ข้อความใน label ของ text box`},
    { require: '', name: 'require', type: 'boolean', description: `ใช้กับ text box ที่จำเป็นต้องระบุค่า โดย
        หากระบุค่า require ="true" จะแสดง * หลัง label`},
    { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน textbox โดย
        หากระบุค่า disable="true" จะไม่สามารถใช้งานหรือ copy ข้อความใน textbox ได้`},
    { require: '', name: 'readonly', type: 'boolean', description: `ใช้กำหนดให้ไม่สามารถแก้ไขข้อมูลใน text box ได้`},
    { require: '', name: 'maxlength', type: 'number', description: `ใช้กำหนดความยาวตัวอักษรสูงสุดที่สามารถพิมพ์ได้ใน text box 
        หากไม่ระบุจะมีค่า = 524288 ตัวอักษร`},
    { require: '', name: 'defaultValue', type: 'text', description: `ใช้กำหนดข้อความที่ต้องการแสดงใน text box`},
    { require: '', name: 'placeholder', type: 'text', description: `ใช้กำหนดข้อความตัวอย่างใน text box`},
    { require: '', name: 'colorTheme', type: 'text', description: `ใช้กำหนดสีของ text box โดยค่าที่สามารถระบุได้ ประกอบด้วย
        success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`},
    { require: '', name: 'warningText', type: 'text', description: `ใช้กำหนดข้อความเตือนกรณีกรอกข้อมูลผิด 
        หากไม่ระบุจะแสดงข้อความเตือนตามประเภทของ text box`},
    { require: '', name: 'customRegExp', type: 'regExp', description: `กำหนด Regular Expression สำหรับตรวจสอบข้อมูลที่ระบุใน textbox
    หากไม่กำหนดค่า จะไม่มีการ validate ใน type: text, password และจะ validate ตาม default condition ใน type: integer, numberม email`},
];
const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'numeral': 'npm:numeral/numeral.js',`,
    ` 'gos-textbox': 'gos:textbox/{version}',`,
    ` 'gos-label': 'gos:label/{version}',`,
    ` 'gos-service': 'gos:service/{version}',`,
    ` 'gos-directive': 'gos:directive/{version}',`,
    `},`,
    ``,
    `packages: {`,
    ` 'gos-textbox': {`,
    `    main: './textbox.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'gos-label': {`,
    `    main: './label.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    ` 'gos-directive': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    ` 'gos-service': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    
];

const TYPELIST: Array<any> = [
    { type: 'text', description: `รับข้อมูลตัวเลข ตัวอักษร และอักขระพิเศษ`},
    { type: 'password', description: `รับข้อมูลตัวเลข ตัวอักษร และอักขระพิเศษ`},
    { type: 'integer', description: `รับข้อมูลตัวเลชจำนวนเต็มบวก ศูนย์ และจำนวนเต็มลบ ไม่รับเครื่องหมายจุลภาค (,)`},
    { type: 'number', description: `รับข้อมูลตัวเลข จำนวนเต็มลบ, 0, จำนวนเฅ็มบวก และ จำนวนทศนิยม ไม่รับเครื่องหมายจุลภาค (,)`},
    { type: 'email', description: `รับข้อมูล format email 
        ตัวอย่าง: example@email.com, example_2@domain.co.uk`},
    { type: 'hidden', description: `รับข้อมูลตัวเลข ตัวอักษร และอักขระพิเศษ`},
];

const APPMODULELINE: Array<any> = [
    `import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective } from 'gos-directive';`,
    `import { LabelComponent } from 'gos-label';`,
    `import { textboxComponent } from 'gos-textbox';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   CustomDisabledDirective,`,
    `   CustomReadonlyDirective,`,
    `   CustomMaxlengthDirective,`,
    `   LabelComponent,`,
    `   textboxComponent,`,
    `   ..........`,
    `],`,
];

@Component({
  moduleId: module.id,
  selector: 'textbox-document',
  templateUrl: './textbox.document.html',
  styleUrls: ['./textbox.document.css']
})
export class TextboxDocument implements OnInit {

  private componentTag: string = '<gos-textbox>';
  private componentDescription: string = `Text box ใช้ในการรับค่าและแสดงผลข้อมูลตามประเภทต่างๆ`;
  private version: string = '1.0';
  private releaseDate: string = '7/12/2016';
  private prefixSyntax: string = `<gos-textbox `;
  private attrSyntax: string = `id="textbox _id" name=" textbox _name" type="type_name" 
                                            [format="format_pattern"] [label="label_name"] [require="true_or_false"] [disable="true_or_false"] [readonly="true_or_false"] [maxlength="number"] [defaultValue="text"] [placeholder="text"] [colorTheme="text"] [warningText="text"]`;
  private suffixSyntax: string = `></gos-textbox>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private typeList = TYPELIST;
  private typeDescription = 'รายละเอียดของ text box ใน type ต่างๆดังต่อไปนี้';
  private numberFormatDescription = 'รูปแบบการแสดงผลข้อมูล text box type="number"';
  private gettingStartDetail = 'app.module.ts - ทำการ import และกำหนดค่าเพิ่มเติมใน declarations';
  private numeralJSVersion = '2.0.4';
  private regExp = /([A-Z])\w+/g;
  
  constructor() { }

  ngOnInit() {
  }

}
