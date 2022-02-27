import { createStore, Store } from "redux";
import { StateType } from "typesafe-actions";
import { RootAction, settingsReducer } from "./reducers/settingsReducer";

export type RootState = StateType<typeof settingsReducer>;

export const store: Store<RootState> = createStore<
  RootState,
  RootAction,
  any,
  any
>(settingsReducer);

export default store;
