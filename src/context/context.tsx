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
      "https://3.bp.blogspot.com/-3o7VZ79X9B4/UaWHC07l53I/AAAAAAAAA-c/RD922mGI89o/s400/GATO+CON+LENTES.jpg",
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
