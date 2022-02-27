import { Reducer } from "redux";
import { ColorScheme } from "../../models/colorScheme";
import { lightColorScheme } from "../../models/lightColorScheme";
import { ActionType, createAction } from "typesafe-actions";

export const actionNames = {
  SET_COLOUR_SCHEME: "SET_COLOUR_SCHEME",
};

export const setColorScheme = createAction(
  actionNames.SET_COLOUR_SCHEME,
  (colors: ColorScheme) => ({
    colors: colors,
  })
)();

export type RootAction = ActionType<typeof setColorScheme>;

export interface SettingsState {
  colors: ColorScheme;
}

const initialState: SettingsState = {
  colors: lightColorScheme,
};

export const settingsReducer: Reducer<SettingsState, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionNames.SET_COLOUR_SCHEME:
      return { ...state, colors: action.payload.colors };
    default:
      return state;
  }
};
