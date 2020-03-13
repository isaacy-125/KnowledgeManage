import React, { useContext } from 'react'
import StoreContext from '../StoreContext';

function TodoList() {
  const { store } = useContext(StoreContext);
  return (
    <ul
      data-testid="todoList"
      style={{ listStyle: 'none' }}
    >
      {store.todos &&
        store.todos.map((t, i) => (
          <li
            onClick={() => store.toggleTodo(i)}
            style={{
              margin: 10,
              opacity: t.completed ? 0.5 : 1,
              cursor: 'pointer',
              textDecoration: t.completed
                ? 'line-through'
                : 'none'
            }}
            key={t.id}
          >
            {t.text}
          </li>
        ))}
    </ul>
  )
}

export default TodoList
