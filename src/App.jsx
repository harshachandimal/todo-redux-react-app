import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteTask, storeTask} from "./utilities/taskSlice.js";

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addedTasks = useSelector((state) => state.addedTasks.tasks);

  const handleInput = (event) => {
    setTask(event.target.value);
  };
  const addNewTask = () => {
    dispatch(storeTask(task));
    setTask("");
  };
  return (
    <>
      <div>
        <label
          htmlFor="small-input"
          className=" mb-2 text-sm font-medium text-dark m-4 "

        >
          Task
        </label>
        <input
          type="text"
          id="small-input"
          value={task}
          name="task"
          onChange={handleInput}
          className=" w-1/2 m-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs "
        />
        <button
          onClick={addNewTask}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Add New Task
        </button>
      </div>
      <div>
        {addedTasks.length > 0 &&
          addedTasks.map((value) => (
            <div key={value.id} className="m-4">
              <p className= "inline m-4">{value.task}</p>
              <button

                  onClick={() => dispatch(deleteTask(value.id))}
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove
              </button>
            </div>
          ))}
      </div>
    </>
  );
};


export default App;
