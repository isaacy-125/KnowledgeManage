// 这个文件时一个没有用命名空间的模块

// 类接口
interface StringValidator {
    isAcceptable(s: string): boolean;
}
let lettersRegexp = /^[A-Za-z]+$/;
let numbrerRegexp = /^[0-9]+$/;
class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numbrerRegexp.test(s);
    }
}