import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counterSlice";
import userReducer from "./components/userSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users:userReducer
  },
});

export default store;
