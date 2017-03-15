import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'goId', type: 'text', description: `ใช้ระบุ id ของ textbox`},
    { require: '*', name: 'goName', type: 'text', description: `ใช้ระบุ name ของ textbox`},
    { require: '*', name: 'type', type: 'text', description: `ใช้ระบุประเภทข้อมูลของ textbox ประกอบด้วย
        text, password, integer, number, email, hidden`},
    { require: '', name: 'hiddenLabel', type: 'boolean', description: `ใช้ระบุว่าจะให้ซ่อน label หรือไม่มีค่า default เป็น false`},
    { require: '', name: 'defaultValue', type: 'text', description: `ใช้กำหนดค่าที่ต้องการรับ-ส่ง ใน textbox และสามารถนำไปใช้ต่อได้ หากต้องการให้เป็นตัวแปรแบบรับส่งค่าได้ ให้ระบุภายในเครื่องหมาย banana ดังตัวอย่าง [(defaultValue)]="parameterName"`},
    { require: '', name: 'isValid', type: 'boolean', description: `ใช้รับ-ส่งผลของการ validate หากข้อมูลใน textbox ถูกต้อง จะส่งค่ากลับเป็น true หากไม่ถูกต้อง ส่งค่ากลับเป็น false`},
    { require: '', name: 'numberFormat', type: 'format', description: `ใช้กำหนด format การแสดงตัวเลขของ textbox type="number"`},
    { require: '', name: 'label', type: 'text', description: `ใช้สำหรับใส่ข้อความใน label ของ text box`},
    { require: '', name: 'require', type: 'boolean', description: `ใช้กับ text box ที่จำเป็นต้องระบุค่า โดย
        หากระบุค่า require ="true" จะแสดง * หลัง label`},
    { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน textbox โดย
        หากระบุค่า disable="true" จะไม่สามารถใช้งานหรือ copy ข้อความใน textbox ได้`},
    { require: '', name: 'readonly', type: 'boolean', description: `ใช้กำหนดให้ไม่สามารถแก้ไขข้อมูลใน text box ได้`},
    { require: '', name: 'maxlength', type: 'number', description: `ใช้กำหนดความยาวตัวอักษรสูงสุดที่สามารถพิมพ์ได้ใน text box 
        หากไม่ระบุจะมีค่า = 524288 ตัวอักษร`},
    { require: '', name: 'placeholder', type: 'text', description: `ใช้กำหนดข้อความตัวอย่างใน text box`},
    { require: '', name: 'colorTheme', type: 'text', description: `ใช้กำหนดสีของ text box โดยค่าที่สามารถระบุได้ ประกอบด้วย
        success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`},
    { require: '', name: 'warningText', type: 'text', description: `ใช้กำหนดข้อความเตือนกรณีกรอกข้อมูลผิด 
        หากไม่ระบุจะแสดงข้อความเตือนตามประเภทของ text box`},
    { require: '', name: 'customRegExp', type: 'regExp', description: `ใช้กำหนด Regular Expression สำหรับตรวจสอบข้อมูลที่ระบุใน textbox
    type: text, password`},
];
const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'numeral': 'npm:numeral/numeral.js',`,
    ` 'go-textbox': 'gos:textbox/{version}',`,
    ` 'go-label': 'gos:label/{version}',`,
    ` 'go-service': 'gos:service/{version}',`,
    ` 'go-directive': 'gos:directive/{version}',`,
    `},`,
    ``,
    `packages: {`,
    ` 'go-textbox': {`,
    `    main: './textbox.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'go-label': {`,
    `    main: './label.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    ` 'go-directive': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    ` 'go-service': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    
];

const TYPELIST: Array<any> = [
    { type: 'text', description: `สามารถระบุตัวอักษร และอักขระพิเศษต่างๆ ไม่มีการ validate เบื้องต้น`},
    { type: 'password', description: `สามารถระบุตัวอักษร และอักขระพิเศษต่างๆ ไม่มีการ validate เบื้องต้น`},
    { type: 'integer', description: `รับเฉพาะตัวเลขจำนวนเต็มบวก ศูนย์ และจำนวนเต็มลบ`},
    { type: 'number', description: `รับเฉพาะตัวเลขจำนวนเต็มบวก ศูนย์ จำนวนเต็มลบ และ จำนวนทศนิยม default format เป็น 0,0.00`},
    { type: 'email', description: `รับเฉพาะข้อมูล email format ตัวอย่าง: example@email.com, example_2@domain.co.uk`},
    { type: 'hidden', description: `ใช้ระบุข้อมูลตัวอักษร และอักขระพิเศษต่างๆ ไม่แสดงค่าใดๆบนหน้าจอ ไม่มีการ validate เบื้องต้น`},
];

const APPMODULELINE: Array<any> = [
    `import { textboxComponent } from 'go-textbox';`,
    `import { LabelComponent } from 'go-label';`,
    `import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective } from 'go-directive';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   textboxComponent,`,
    `   LabelComponent,`,
    `   CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective,`,
    `   ..........`,
    `],`,
];

@Component({
  moduleId: module.id,
  selector: 'textbox-document',
  templateUrl: './textbox.document.html',
})
export class TextboxDocument implements OnInit {

  private componentTag: string = '<go-textbox>';
  private componentDescription: string = `Text box ใช้ในการรับค่าและแสดงผลข้อมูลตามประเภทต่างๆ`;
  private version: string = '1.0';
  private releaseDate: string = '10/02/2017';
  private prefixSyntax: string = `<go-textbox `;
  private attrSyntax: string = `goId="textbox _id" goName="textbox _name" type="type_name" [hiddenLabel="true"] [ defaultValue="text" or [(defaultValue)]="default_value_parameter" ]
                                            [format="format_pattern"] [label="label_name"] [require="true"] [disable="true"] [readonly="true"] [maxlength="number"] [placeholder="text"] [colorTheme="text"] [warningText="text"]`;
  private suffixSyntax: string = `></go-textbox>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private typeList = TYPELIST;
  private typeDescription = 'รายละเอียดของ text box ใน type ต่างๆดังต่อไปนี้';
  private numeralJSVersion = '2.0.4';
  private regExp = /^[a-zA-Z0-9]{8}$/g;

  paramText = '{{userName}}';
  myInteger = 1111;
  myNumber = 1111.22;
  userName: string = "John";
  isValidFlag: boolean;
  isValidFlagText = '{{isValidFlag}}';
  isValidCustomFlag: boolean;
  isValidCustomFlagText = '{{isValidCustomFlag}}';

  constructor() { }

  ngOnInit() {
  }

}
