function Mvvm(options={}) {
    // 将options挂载到$options上 虽然不知道为什么 但好像vue这样干
    this.$options = options;
    // data挂载到_.data上 同理vue
    let data = this._data = this.$options.data;
    // 学名叫数据劫持 貌似就是给对象增加get set方法
    observer(data);
    // 下面貌似是做数据代理 其实说穿了
    // 就是mvvm._data.a可以等价mvvm.a
    // 但是貌似测试没有通过 而且我也有点疑惑
    // 这的get set和后面的数据劫持的get set会有冲突或者怎样 目前先放着


    // for (let key in data) {
    //     Object.defineProperty(data, key, {
    //         configurable: true,
    //         get() {
    //             return this._data[key];
    //         },
    //         set(newVal) {
    //             this._data[key] = newVal;
    //         }
    //     })
    // }

    // 这个方法是编译html上的{{}}符号
    new Compile(options.el, this);
}

function Compile(el, vm) {
    // 给实例化的mvvm加上$el属性 指向绑定的html元素
    // 具体为什么 额 作者说vue这样做 日了狗
    vm.$el = document.querySelector(el);
    // createDocumentFragment方法叫做创建一个文档碎片
    // 其实我也很少用 网上说作用是给body appendChild一次一次加 
    // 页面相当于多次刷新 把要加入的节点都放入文档碎片中 一次加入html中
    // 减少开支 吱吱吱
    let fragment = document.createDocumentFragment();
    while(child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }
    // 对el里面的内容进行替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}
            if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
                console.log(RegExp.$1); // 匹配到的第一个分组 如： a.b, c
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(key => {
                    if (val._data) {
                        val = val._data[key];     // 如this.a.b
                    } else {
                        val = val[key];
                    }
                });
                // 用trim方法去除一下首尾空格
                node.textContent = txt.replace(reg, val).trim();
            }
            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }
    replace(fragment);  // 替换内容
    vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}

function observer(data) {
    // 如果不是object类型就不处理
    // 为了给object对象设置set get方法
    if (!data || typeof data !== 'object') return;
    // 这里是一个新的方法 注意大小写
    return new Observer(data);
}

function Observer(data) {
    for (key in data) {
        let val = data[key];
        // 这里拿到单个键值对的值再去observer方法
        // 目的是深度递归 都设置get set方法
        observer(val);
        Object.defineProperty(data, key, {
            // 这个属性目前知道的作用是
            // 可配置改键值对 可删除该键值对
            configurable: true,
            get() {
                return val
            },
            set(newVal) {
                // 如果新值全等旧值就可以不做任何操作
                if (val === newVal) {
                    return;
                }
                // 不然就是赋值新值
                val = newVal;
                // 因为新值没有设置get set
                // 又要去一遍observer设置get set
                observer(newVal);
            }
        })
    }
}
