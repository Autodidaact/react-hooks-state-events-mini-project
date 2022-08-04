import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const categoryExcept = categories.filter(category => category !== "All");
  const [formState, setFormState] = React.useState({
    text: "John",
    category: "Food"
  })
  function handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    setFormState({...formState, [name]:value});
  }
  const newItem = {text:formState.text, category:formState.category}
  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(newItem);
  }
  const exceptAll = categoryExcept.map(category => {
    return (
      <option key={category} value={category}>{category}</option>
    )
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleInput}>
          {/* render <option> elements for each category here */}
          {exceptAll}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
