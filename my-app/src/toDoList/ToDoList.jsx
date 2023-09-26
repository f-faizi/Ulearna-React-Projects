import React, { useState } from "react";

function ToDoList() {
  const [value, setValue] = useState([]);
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={value}
          placeholder="Add item"
          className="border-2"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ToDoList;
