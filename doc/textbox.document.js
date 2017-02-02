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
var ATTRIBUTELIST = [
    { require: '*', name: 'id', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38 id \u0E02\u0E2D\u0E07 textbox" },
    { require: '*', name: 'name', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38 name \u0E02\u0E2D\u0E07 textbox" },
    { require: '*', name: 'type', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07 textbox \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\n        text, password, integer, number, email, hidden" },
    { require: '', name: 'numberFormat', type: 'format', description: "\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A textbox \u0E17\u0E35\u0E48\u0E21\u0E35 type=\"number\"" },
    { require: '', name: 'label', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19 label \u0E02\u0E2D\u0E07 text box" },
    { require: '', name: 'require', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E31\u0E1A text box \u0E17\u0E35\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 \u0E42\u0E14\u0E22\n        \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 require =\"true\" \u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07 * \u0E2B\u0E25\u0E31\u0E07 label" },
    { require: '', name: 'disable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 textbox \u0E42\u0E14\u0E22\n        \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 disable=\"true\" \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E23\u0E37\u0E2D copy \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19 textbox \u0E44\u0E14\u0E49" },
    { require: '', name: 'readonly', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19 text box \u0E44\u0E14\u0E49" },
    { require: '', name: 'maxlength', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E44\u0E14\u0E49\u0E43\u0E19 text box \n        \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E30\u0E21\u0E35\u0E04\u0E48\u0E32 = 524288 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23" },
    { require: '', name: 'defaultValue', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19 text box" },
    { require: '', name: 'placeholder', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E19 text box" },
    { require: '', name: 'colorTheme', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07 text box \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\n        success=\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27, info=\u0E2A\u0E35\u0E1F\u0E49\u0E32, warning=\u0E2A\u0E35\u0E2A\u0E49\u0E21, danger=\u0E2A\u0E35\u0E41\u0E14\u0E07" },
    { require: '', name: 'warningText', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E01\u0E23\u0E13\u0E35\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E34\u0E14 \n        \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E15\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07 text box" },
    { require: '', name: 'customRegExp', type: 'regExp', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14 Regular Expression \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E43\u0E19 textbox\n    \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32 \u0E08\u0E30\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23 validate \u0E43\u0E19 type: text, password \u0E41\u0E25\u0E30\u0E08\u0E30 validate \u0E15\u0E32\u0E21 default condition \u0E43\u0E19 type: integer, number\u0E21 email" },
];
var SYSTEMJSLINE = [
    "map: {",
    " 'numeral': 'npm:numeral/numeral.js',",
    " 'gos-textbox': 'gos:textbox/{version}',",
    " 'gos-label': 'gos:label/{version}',",
    " 'gos-service': 'gos:service/{version}',",
    " 'gos-directive': 'gos:directive/{version}',",
    "},",
    "",
    "packages: {",
    " 'gos-textbox': {",
    "    main: './textbox.js',",
    "    defaultExtension: 'js'",
    "  },",
    " 'gos-label': {",
    "    main: './label.js',",
    "    defaultExtension: 'js'",
    "  },",
    "}",
    " 'gos-directive': {",
    "    main: './index.js',",
    "    defaultExtension: 'js'",
    "  },",
    "}",
    " 'gos-service': {",
    "    main: './index.js',",
    "    defaultExtension: 'js'",
    "  },",
    "}",
];
var TYPELIST = [
    { type: 'text', description: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23 \u0E41\u0E25\u0E30\u0E2D\u0E31\u0E01\u0E02\u0E23\u0E30\u0E1E\u0E34\u0E40\u0E28\u0E29" },
    { type: 'password', description: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23 \u0E41\u0E25\u0E30\u0E2D\u0E31\u0E01\u0E02\u0E23\u0E30\u0E1E\u0E34\u0E40\u0E28\u0E29" },
    { type: 'integer', description: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E0A\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E15\u0E47\u0E21\u0E1A\u0E27\u0E01 \u0E28\u0E39\u0E19\u0E22\u0E4C \u0E41\u0E25\u0E30\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E15\u0E47\u0E21\u0E25\u0E1A \u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E08\u0E38\u0E25\u0E20\u0E32\u0E04 (,)" },
    { type: 'number', description: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 \u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E15\u0E47\u0E21\u0E25\u0E1A, 0, \u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E05\u0E47\u0E21\u0E1A\u0E27\u0E01 \u0E41\u0E25\u0E30 \u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E28\u0E19\u0E34\u0E22\u0E21 \u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E08\u0E38\u0E25\u0E20\u0E32\u0E04 (,)" },
    { type: 'email', description: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 format email \n        \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07: example@email.com, example_2@domain.co.uk" },
    { type: 'hidden', description: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23 \u0E41\u0E25\u0E30\u0E2D\u0E31\u0E01\u0E02\u0E23\u0E30\u0E1E\u0E34\u0E40\u0E28\u0E29" },
];
var APPMODULELINE = [
    "import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective } from 'gos-directive';",
    "import { LabelComponent } from 'gos-label';",
    "import { textboxComponent } from 'gos-textbox';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   CustomDisabledDirective,",
    "   CustomReadonlyDirective,",
    "   CustomMaxlengthDirective,",
    "   LabelComponent,",
    "   textboxComponent,",
    "   ..........",
    "],",
];
var TextboxPage = (function () {
    function TextboxPage() {
        this.componentTag = '<gos-textbox>';
        this.componentDescription = "Text box \u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E15\u0E48\u0E32\u0E07\u0E46";
        this.version = '1.0';
        this.releaseDate = '7/12/2016';
        this.prefixSyntax = "<gos-textbox ";
        this.attrSyntax = "id=\"textbox _id\" name=\" textbox _name\" type=\"type_name\" \n                                            [format=\"format_pattern\"] [label=\"label_name\"] [require=\"true_or_false\"] [disable=\"true_or_false\"] [readonly=\"true_or_false\"] [maxlength=\"number\"] [defaultValue=\"text\"] [placeholder=\"text\"] [colorTheme=\"text\"] [warningText=\"text\"]";
        this.suffixSyntax = "></gos-textbox>";
        this.attributeList = ATTRIBUTELIST;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleLine = APPMODULELINE;
        this.typeList = TYPELIST;
        this.typeDescription = 'รายละเอียดของ text box ใน type ต่างๆดังต่อไปนี้';
        this.numberFormatDescription = 'รูปแบบการแสดงผลข้อมูล text box type="number"';
        this.gettingStartDetail = 'app.module.ts - ทำการ import และกำหนดค่าเพิ่มเติมใน declarations';
        this.numeralJSVersion = '2.0.4';
        this.regExp = /([A-Z])\w+/g;
    }
    TextboxPage.prototype.ngOnInit = function () {
    };
    TextboxPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'textbox-page',
            templateUrl: './textbox.page.html',
            styleUrls: ['./textbox.page.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TextboxPage);
    return TextboxPage;
}());
exports.TextboxPage = TextboxPage;
//# sourceMappingURL=textbox.document.js.map