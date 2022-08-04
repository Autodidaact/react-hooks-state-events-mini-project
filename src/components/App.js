import React, {useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { isCompositeComponent } from "react-dom/test-utils";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [updatedTaskList, setUpdatedTaskList] = useState(TASKS);
  const [updatedCategories, setUpdatedCategories] = useState(CATEGORIES[0]);

  useEffect(() => {
    console.log(updatedTaskList, updatedCategories)
    const taskToDisplay = TASKS.filter(task => task.category === updatedCategories);
    updatedCategories === "All" ? setUpdatedTaskList(TASKS) : setUpdatedTaskList(taskToDisplay)}, [updatedCategories], [])
 
  function handleCategory(newEvent){
    setUpdatedCategories((initialCategory) => initialCategory = CATEGORIES.find(category => category === newEvent.target.name))
  }
  function onTaskFormSubmit(newItem){
    setUpdatedTaskList([...updatedTaskList, newItem])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handler={handleCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={updatedTaskList} />
    </div>
  );
}

export default App;
