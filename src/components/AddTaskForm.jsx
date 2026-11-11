import React, { useContext } from 'react';
import Field from './Field';
import Button from './Button';
import { TasksContext } from '../context/TasksContext';

function AddTaskForm() {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef
  } = useContext(TasksContext)

const onSubmit = (event) => {
  event.preventDefault()
  addTask()
}

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className='todo__field'
        label='Название задачи'
        id='new-task'
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type='submit'>Добавить</Button>
    </form>
  );
}

export default AddTaskForm;
