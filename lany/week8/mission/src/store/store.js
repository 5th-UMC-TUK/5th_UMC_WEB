import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfo/userInfoSlice";

export default configureStore({
  reducer: {
    user: userInfoReducer,
  },
});
