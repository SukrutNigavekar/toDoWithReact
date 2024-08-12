import { useState } from "react";
import "./App.css";

function App() {
  let [todo, setTodo] = useState("");

  let oldData = JSON.parse(localStorage.getItem("toDoList")) ?? [];
  let [allToDoList, setAllList] = useState(oldData);
  let addtodo = (e) => {
    e.preventDefault();
    let obj = {
      todoName: todo,
      toDoStatus: false,
    };
    let copyData = [...allToDoList, obj];
    localStorage.setItem("toDoList", JSON.stringify(copyData));
    setAllList(copyData);
    setTodo("");
  };
  return (
    <>
      <div className=" ">
        <form
          onSubmit={addtodo}
          className="flex flex-row w-[700px] mx-auto justify-center py-10"
        >
          <input
            type="text"
            placeholder="Enter your task"
            className="basis-[400px] text-[20px] p-4 border border-red-600"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="bg-blue-600 text-[20px] text-white p-[10px_15px]">
            Add todo
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
