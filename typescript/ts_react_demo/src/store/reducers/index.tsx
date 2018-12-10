import { Store } from '../../types/index';
import { Action } from '../actions/counter';
import * as types from '../action-types';

let initState:Store = { number: 0 }

export default function(state: Store = initState, action: Action) {
    switch (action.type) {
        case types.ADD:
            // 当action动作行为是ADD的时候，给number加1
            return { number:state.number + 1 }
            break;
        case types.SUBTRACT:
            // 当action动作行为是SUBTRACT的时候，给number减1
            return { number:state.number - 1 }
            break;
        default:
            // 当没有匹配到则返回原本的state
            return state
            break;
    }
}