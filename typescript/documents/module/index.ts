// 内部模块称为命名空间 外部模块称为模块
// 导出
export interface StringValidator {
    isAcceptable(s: string): boolean;
}


// 导出重命名
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5;
    }
}
export { ZipCodeValidator as mainValidator }


// 导入
// 导入一个模块中的某个导出内容
import { ZipCodeValidator } from './ZipCodeValidator';


// 将整个模块导入到一个变量 并通过他来访问模块的导出部分
import * as validator from './ZipCodeValidator';
let myValidator = new validator.ZipCodeValidator();


// 默认导出
// 每个模块只能够有一个default默认导出模块
// 标记为默认导出的类和函数的名字是可以省略的
export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5;
    }
}
import validator from './ZipCodeValidator';
let myValidator = new validator();


// 为了支持commonJs和AMD的exports typescript提供了export = 语法
// 若使用export = 导出一个模块 则必须使用import module = require('model‘)导入
let numberRegexp = /^[0-9]+$/;
class ZipCodeVlidator {
    isAcceptable(s: string) {
        return s.length === 5;
    }
}
export = ZipCodeValidator;
import zip = require('./ZipCodeValidator');
let validator = new zip();