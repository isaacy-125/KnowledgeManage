import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        storepath: {
            namespaced: true,
            state: {
                count: 0,
                number: 0,
                todos: [{
                    id: 1,
                    text: '...',
                    done: true
                }, {
                    id: 2,
                    text: '...',
                    done: false
                }]
            },
            getters: {
                doneTodos: state => {
                    return state.todos.filter(todo => todo.done);
                }
            },
            mutations: {
                increment (state) {
                    state.count ++
                },
                addNumber (state, n) {
                    state.number += n
                }
            },
            actions: {
                incrementAsync(context) {
                    setTimeout(() => {
                        context.commit('increment')
                    }, 1000)
                }
            }
        }
    }
})

export default store;
