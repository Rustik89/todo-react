import {useContext} from "react";

import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import TodoInfo from './TodoInfo';
import TodoList from './TodoList';
import Button from "./Button.jsx";
import {TasksContext} from "../context/TasksContext.jsx";

function Todo() {

  const { firstIncompleteTaskRef} = useContext(TasksContext)


  return (
   <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm />
        <SearchTaskForm/>
        <TodoInfo/>
        <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
        >
          Перейти к 1-ой незавершенной задаче
        </Button>
        <TodoList/>
      </div>
  );
}

export default Todo;
