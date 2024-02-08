import React, { useState } from 'react';

import saveIcon from '../../assets/image/free-icon-save-2550221.png';
import editIcon from '../../assets/image/free-icon-pen-1659682.png';
import copyIcon from '../../assets/image/free-icon-file-backup-8053608.png';
import deleteIcon from '../../assets/image/free-icon-recycle-bin-3156999.png';

import './TodoItem.scss'

interface TodoItemProps {
  id: number;
  text: string;
  onEdit: (id: number, newText: string) => void;
  onCopy: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onEdit, onCopy, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const handleCopyClick = () => {
    onCopy(id);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input type="text" className='todo-item__edit' value={editedText} onChange={handleInputChange} />
      ) : (
        <span>{text}</span>
      )}
      <div className="button-group">
        {isEditing ? (
          <button onClick={handleSaveClick}>
            <img src={saveIcon} alt='Сохранить' />
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <img src={editIcon} alt='Редактировать' />
            </button>
        )}
        <button onClick={handleCopyClick}>
        <img src={copyIcon} alt='Копировать' />
          </button>
        <button onClick={handleDeleteClick}>
        <img src={deleteIcon} alt='Удалить' />
          </button>
      </div>
    </div>
  );
};

export default TodoItem;