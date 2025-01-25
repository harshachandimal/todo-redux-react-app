import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./utilities/taskSlice.js";

export default configureStore({
reducer: {
    tasks : tasksReducer,



}

})
