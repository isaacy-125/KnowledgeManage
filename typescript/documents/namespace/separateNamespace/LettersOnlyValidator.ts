// 引用Validation命名空间 得到StringValidator 接口引用
/// <reference path="Validation.ts" />

namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}