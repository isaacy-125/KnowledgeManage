// ts中的引入语法
import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter';
import { Store } from '../types'

interface IProps {
    name: string,
    add: any,
    subtract: any
}

interface IState {
    number: number
}

// 定义props和state的类型
class CounterComponent extends React.Component<IProps, IState> {
    state = {
        number: 0
    }
    render() {
        let { number, add, subtract } = this.props;
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{number}</p>
                <button
                    onClick={add}
                >+</button>
                <button
                    onClick={subtract}
                >-</button>
            </div>
        )
    }
}

let mapStateToProps = function (state:Store) {
    return state
}

export default connect(
    mapStateToProps,
    actions
)(CounterComponent)

