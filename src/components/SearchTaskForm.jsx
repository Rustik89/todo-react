import React, { useContext } from 'react';
import Field from './Field';
import { TasksContext } from '../context/TasksContext';


function SearchTaskForm() {
  const {
    searchQuery,
    setSearchQuery
  } = useContext(TasksContext)

  return (
    <div>
      <form
        className="todo__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <Field
          className='todo-field'
          label='Искать задачу'
          id='search__task'
          type='search'
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchTaskForm;
