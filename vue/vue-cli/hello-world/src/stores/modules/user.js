export default {
    namespaced: true,
    state: {
        count: 5,
    },
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