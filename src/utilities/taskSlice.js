import {createSlice, nanoid} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    storeTask: (state, action) => {
      const task = {id: nanoid(), task: action.payload};
        state.tasks.push(task);
    },
    deleteTask: (state, action) => {},

  },
});

export default taskSlice.reducer;
export const { storeTask, deleteTask } = taskSlice.actions;
