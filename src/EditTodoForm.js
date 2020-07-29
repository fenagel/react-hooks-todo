import React from 'react';
import Textfield from '@material-ui/core/Textfield';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({editTodo, id, task, toggleEditForm}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <Textfield
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}
