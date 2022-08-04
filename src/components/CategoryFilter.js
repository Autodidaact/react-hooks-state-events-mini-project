import React from "react";

function CategoryFilter({categories, handler}) {
  function handleClick(event){
    const buttons = document.querySelectorAll("#button");

    buttons.forEach(button => {
      button.className = "";
      event.target.className = "selected";
    })
    handler(event)
  }
  const categoryFilterList = categories.map((category) =>{
    return (
      <button id="button" key={category} className = "" onClick={handleClick} name={category}>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryFilterList}
    </div>
  );
}

export default CategoryFilter;
