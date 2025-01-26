import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./utilities/taskSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

export const persistedReducer = persistReducer(persistConfig, tasksReducer)
export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  }
})

export const persistor = persistStore(store);

