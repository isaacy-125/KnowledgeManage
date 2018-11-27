namespace Validation {
    // 导出一个接口
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}