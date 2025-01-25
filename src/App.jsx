import {useState} from "react";
import {useDispatch} from "react-redux";
import {storeTask} from "./utilities/taskSlice.js";

const App = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleInput = (event) => {
        setTask(event.target.value)

    }
    const addNewTask = () => {
        dispatch(storeTask(task))

    }
  return (
    <div>
      <label
        htmlFor="small-input"
        className=" mb-2 text-sm font-medium text-dark "
      >
        Task
      </label>
      <input
        type="text"
        id="small-input"
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
  );
};

export default App;
