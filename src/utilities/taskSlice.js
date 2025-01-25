import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    storeTask: (state, action) => {
        state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {},

  },
});

export default taskSlice.reducer;
export const { storeTask, deleteTask } = taskSlice.actions;
