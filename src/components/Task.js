import React, {useState} from "react";

function Task({ text, category}) {
  const [isClicked, setIsClicked] = useState(false)

 
  
 
  return (
    isClicked ? null:
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=> {setIsClicked(isClicked => !isClicked)}}>X</button>
    </div>
  );
}

export default Task;
