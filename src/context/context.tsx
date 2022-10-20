import React, { createContext, useReducer, Dispatch } from "react";
import {
  momoPropertiesReducer,
  loadingReducer,
  AppActions,
} from "./reducers";

export enum BackgroundSize {
  Contain = "contain",
  Cover = "cover",
}

export enum TextColor {
  White = "white",
  Black = "black",
}

export enum MomoTemplate {
  Grasoso = 1,
}

export type MomoProperties = {
  topText: string;
  bottomText: string;
  saturation: number;
  brightness: number;
  previewImage: string;
  backgroundImage: string;
  momoTemplate: MomoTemplate;
  // TODO
  // backgroundSize: BackgroundSize;
  // textStrokeSize: number;
  // textSize: number;
  // textFont: string;
  // textColor: TextColor;
};

export type InitialStateType = {
  loading: boolean;
  momoProperties: MomoProperties;
};

const initialState = {
  loading: false,
  momoProperties: {
    backgroundImage:
      "https://th.bing.com/th/id/OIP.7mZRby3S7rf5yuJfdOV4vgHaHC?w=212&h=201&c=7&r=0&o=5&pid=1.7",
    bottomText: "HOLA MI MOMO NO TIENE TEXTO ASKAJDAKSJDK",
    brightness: 1,
    momoTemplate: MomoTemplate.Grasoso,
    previewImage: null,
    saturation: 1,
    topText: "WHEN TU MOMO NO TIENE TEXTO xdxd",
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { loading, momoProperties }: InitialStateType,
  action: AppActions
) => ({
  loading: loadingReducer(loading, action),
  momoProperties: momoPropertiesReducer(momoProperties, action),
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
