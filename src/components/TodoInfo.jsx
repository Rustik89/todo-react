import React from 'react';

function TodoInfo(props) {
  const {
    total,
    done,
    onDeleteAllButtonClick
  } = props

  const hasTasks = total > 0

  const handleClick = (event) => {
    console.log('event: ', event)
  }


  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Выполнено {done} из {total}
      </div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={onDeleteAllButtonClick}
          >

          Удалить все
        </button>
      )}
    </div>
  );
}

export default TodoInfo;
