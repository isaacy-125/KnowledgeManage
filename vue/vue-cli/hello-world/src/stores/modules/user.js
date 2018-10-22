export default {
    namespaced: true,
    // 这里是初始化state
    state: {
        count: 5,
    },
    // 每一个state对应get set方法 action用于触发set
    getters: {
        getCount: (state, getters, rootState) => {
            window.console.log(rootState);
            return state.count;
        }
    },
    mutations: {
        setCount(state, data) {
            state.count = data;
        }
    },
    actions: {
        increment({ commit, state }) {
            window.console.log(state);
            commit('setCount', state.count +=1);
        }
    }
}