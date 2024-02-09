import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.scss'

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  handleEdit: (id: number, newText: string) => void;
  handleCopy: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleEdit, handleCopy, handleDelete }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onEdit={handleEdit}
          onCopy={handleCopy}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
