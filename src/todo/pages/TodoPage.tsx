import React, { useState } from 'react';
import TodoList from '../components/TodoList';
// import TodoItem from '../components/TodoItem';
import './TodoPage.scss'

const TodoPage: React.FC = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newId = todos.length + 1;
      setTodos([...todos, { id: newId, text: newTodoText }]);
      setNewTodoText('');
    }
  };

  const handleEdit = (id: number, newText: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const handleCopy = (id: number) => {
    const todoToCopy = todos.find(todo => todo.id === id);
    if (todoToCopy) {
      const newId = todos.length + 1;
      setTodos([...todos, { id: newId, text: todoToCopy.text }]);
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(`Удалить задачу ${id}`);
  };

  return (
    <div className="todo-page">
      <div className='todo-page__added'>
      <input
        className='todo-page__input'
        type="text"
        value={newTodoText}
        onChange={handleInputChange}
        placeholder="Введите новую задачу"
      />
      <button className='todo-page__button' onClick={handleAddTodo}>+</button>
      </div>
      <h2 className='todo-page__title'>Список твоих дел:</h2>
      <TodoList todos={todos}  handleEdit={(id: number, newText: string) => handleEdit(id, newText)} handleCopy={handleCopy} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoPage;
