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
let strings = ['hello', '98052', '101'];
let validators: { [s: string]: StringValidator } = {};
validators['Zip code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}