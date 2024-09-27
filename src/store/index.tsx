import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import UserReducer from "./UserSlice";
import MessageReducer from "./MessageSlice";
import { ActiveRecipientReducer, RecipientListReducer } from "./RecipientSlice";
const store = configureStore({
  reducer: {
    login: LoginReducer,
    user: UserReducer,
    message: MessageReducer,
    active: ActiveRecipientReducer,
    recipients: RecipientListReducer,
  },
});

export default store;
