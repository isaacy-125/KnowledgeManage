import React from 'react'
import { observer, useObservable } from 'mobx-react-lite'
import StoreContext from './StoreContext';
import TodoList from './components/TodoList'
import Footer from './components/Footer'


const App = observer(() => {
  const store = useObservable({
    todos: [
      { id: 1, text: 'Buy eggs', completed: true },
      { id: 2, text: 'Write a post', completed: false }
    ],
    toggleTodo(index) {
      store.todos[index].completed = !store.todos[index]
        .completed;
        store.todos = JSON.parse(JSON.stringify(store.todos));
    },
    get getTodos() {
      return store.todos;
    },
    get getCompletedLen() {
        return store.todos.filter(t => t.completed).length;
    }
  })
  return (
    <StoreContext.Provider
        value={{ store }}
    >
        <div className="App">
            <h2>A Todo App yet again!</h2>
            <TodoList
                todos={store.getTodos}
                toggleTodo={store.toggleTodo}
            />
            <Footer />
        </div>
    </StoreContext.Provider>
  )
})

export default App;
