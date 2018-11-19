// 1.某些情况下 &&判断比三元表达式更简单明了
const sampleComponent = () => {
    return isTrue ? <p>True</p> : <none />
}

const sampleComponent = () => {
    return isTrue && <p>True</p>
}

// 2.如果有多个三元表达式的时候 可以通过立即执行函数在内部调用if else
const sampleComponent = () => {
    return (
        <div>
            {flag && flag2 && !flag3
                ? flag4
                ?<p>Blah</p>
                : flag5
                ? <p>Meh</p>
                :<p>Herp</p>
                :<p>Derp</p>
            }
        </div>
    )
}

const sampleComponent = () => {
    return (
        <div>
            {
                (() => {
                    if (flag && flag2 && !flag3) {
                        if (flag4) {
                            return <p>Blag</p>
                        } else if (flag5) {
                            return <p>Meh</p>
                        } else {
                            return <p>Herp</p>
                        }
                    } else {
                        return <p>Derp</p>
                    }
                })()
            }
        </div>
    )
}

// 3.setState函数是异步的 但是eventListener, Ajax, setTimeout等行为中 setState会变成
// 同步函数 因为这些函数调用不处于react框架 react控制不了

// 4.组件嵌套多 避免props一层一层传递可以使用高阶组件 或者context api
// inject.jsx
var title = 'React Dependency Injection';
export default function inject(Component) {
    return class Injector extends React.Component {
        render() {
            return (
                <Component
                    {...this.state}
                    {...this.props}
                    title={title}
                />
            )
        }
    }
}
// Title.jsx
export default function Title(props) {
    return <h1>{props.title}</h1>
}
// Header.jsx
import inject from './inject.jsx';
import Title from './Title.jsx';

var EnhancedTitle = inject(Title)
export default function Header() {
    return (
        <header>
            <EnhancedTitle />
        </header>
    )
}

// 5.建议在constructor中绑定函数 或者使用箭头函数

// 6.组件内部混入了业务逻辑和ui 推荐分成容器组件(关心数据)，UI组件(关心组件展示)
// Clock/index.js
import Clock from './Clock.jsx';

export default class ClockContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: props.time};
        this._update = this._updateTime.bind(this);
    }
    render() {
        return <Clock {...this._extract(this.state.time)} />
    }
    componentDidMount() {
        this._interval = setInterval(this._update, 1000);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    _extract(time) {
        return {
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
        }
    }
    _updateTime() {
        this.setState({
            time: new Date(this.state.time.getTime() + 1000)
        })
    }
}
// Clock/Clock.jsx
export default function Clock(props) {
    var [hours, minutes, seconds] = [
        props.hours,
        props.minuteds,
        props.seconds,
    ].map(num => num < 10 ? '0' + num : num)
    return <h1>{hours} : {minutes} : { seconds }</h1>
}

// 7.推荐使用函数式setState 对象式setState 会基于性能考虑合并多个setState 还会异步 不好处理
// state: { test: 1 }
this.setState((preState, props) => ({
    test: preState.test + 1.
}))
this.setState((preState, props) => ({
    test: preState.test + 1.
}))
this.setState((preState, props) => ({
    test: preState.test + 1.
}))
// state: { test: 4 }

// 8.不要再getInitialState和constructor中通过props初始化state 这两个函数只会调用一次
// props改变不会使state发生变化