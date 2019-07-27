import React from 'react'

function TodoList({ todos, toggleTodo }) {
  return (
    <ul
      data-testid="todoList"
      style={{ listStyle: 'none' }}
    >
      {todos &&
        todos.map((t, i) => (
          <li
            onClick={() => toggleTodo(i)}
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
