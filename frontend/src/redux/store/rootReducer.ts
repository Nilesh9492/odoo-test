import { combineReducers } from "redux";
import roomsReducer from "../rooms/reducer";

const rootReducer = combineReducers({
  roomsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
