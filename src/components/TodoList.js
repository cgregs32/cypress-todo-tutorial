import React from 'react'

const TodoItem = props =>
  <li className={props.isComplete ? "completed" : null}>
    <div className="view">
      <input className="toggle" type="checkbox"
        checked={props.isComplete}
        onChange={() => props.handleToggle(props.id)}
      />
      <label>
        {props.name}
      </label>
      <button
        onClick={() => props.handleDelete(props.id)}
        className="destroy"
      />
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(todo =>
      <TodoItem
        key={todo.id} {...todo}
        handleDelete={props.handleDelete}
        handleToggle={props.handleToggle}
      />
    )}
  </ul>
