// 全字匹配
var regex = /hello/
regex.test('hello') //true

// 横向模糊匹配
// 第一个字符是a 接下来是最少2个最多5个b 和最后一个c
// 最后的g表示全局匹配 如果没有 只匹配第一个
// {m,} 表示最少m次
// {m} 表示出现m次
// ? 表示 {0, 1} 表示出现或者不出现
// + 表示 {1,}最少出现一次
// * 表示 {0,}表示可能出现任意次或者不出现
var regex = /ab{2,5}c/g;
var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
string.match(regex) // ["abbc", "abbbc", "abbbbc", "abbbbbc"]

// 纵向模糊匹配
// 表示ab字符之间可以是123之间的任何数
// [123]表示123字符中的任意一个 [^123]表示出了123字符的任意一个
// \d表示[0-9]
// \D表示[^0-9]
// \w表示[0-9a-z-A-Z_] 数字 大小写字符和下划线
// \W表示[^0-9a-zA-Z_] 由于上面的是单个的单词 所以这里表示非单词字符
// \s表示[\t\v\n\r\f] 空白符 空格 水平制表符 垂直制表符 换行符 回车符 换页符
// \S表示[^\t\v\n\r\f] 非空白符
// .表示通配符 任何字符 出了换行符 回车符 行分割符 段分隔符
var regex = /a[123]b/g
var string = 'a0b a1b a2b a3b a4b'
string.match(regex) // ["a1b", "a2b", "a3b"]

// 贪婪匹配
// 会根据你能给我的最多来匹配 匹配2到5个数字 能越多越好
var regex = /\d{2,5}/g
var string = '123 1234 12345 123456'
string.match(regex) // ["123", "1234", "12345", "12345"]

// 惰性匹配
// 在量词后面加个？号表示虽然2到5个都行 当2个够了 就行了
var regex = /\d{2,5}?/g
var string = '123 1234 12345 123456'
string.match(regex) // ["12", "12", "34", "12", "34", "12", "34", "56"]

// 多选分支
// 多个模式匹配任意就行
// 需要注意多选分支是惰性的如果第一个匹配了 就不会去匹配第二个 比如good|goodbye 匹配到了good就不会去比较是不是goodbye了
var regex = /good|nice/g
var string = 'good idea, nice try.'
string.match(regex) // ["good", "nice"]

// 匹配位置
// .h.e.l.l.o 上面点的位置表示hello字符的位置
// ^ 匹配开头 在多行中匹配行开头
// $ 匹配结尾 在多行匹配行结尾
// 匹配hello的开头或者结尾用#代替 g表示都匹配
var result = "hello".replace(/^|$/g, '#');
console.log(result);  // #hello#
// \b是\w和\W之间的位置 包括\w和^之间和\w和$之间 就是普通字符和非普通字符之间和普通字符和开头 普通字符和结尾之间
// \B就是除了\b之外的位置
var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log(result);  //"[#JS#] #Lesson_01#.#mp4#"
// (?=p) 表示p前面的位置
var result = "hello".replace(/(?=l)/g, '#');
console.log(result); // 'he#l#lo'
// (?!p) 表示出了p前面的位置
var result = "hello".replace(/(?!l)/g, '#');
console.log(result);  // "#h#ell#o#"

