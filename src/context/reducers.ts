import { MomoProperties, MomoTemplate } from "./context";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SwitchTheme = "SWITCH_THEME",
  SetLoading = "SET_LOADING",
  SetBackgroundImage = "SET_BACKGROUND_IMAGE",
  SetBottomText = "SET_BOTTOM_TEXT",
  SetBrightness = "SET_BRIGHTNESS",
  SetMomoTemplate = "SET_MOMO_TEMPLATE",
  SetPreviewImage = "SET_PREVIEW_IMAGE",
  SetSaturation = "SET_SATURATION",
  SetTopText = "SET_TOP_TEXT",
}

type MomoPropertiesPayload = {
  [Types.SetBackgroundImage]: {
    image: string;
  };
  [Types.SetBottomText]: {
    text: string;
  };
  [Types.SetBrightness]: {
    value: number;
  };
  [Types.SetMomoTemplate]: {
    template: MomoTemplate;
  };
  [Types.SetPreviewImage]: {
    image: string;
  };
  [Types.SetSaturation]: {
    value: number;
  };
  [Types.SetTopText]: {
    text: string;
  };
};

export type AppActions = MomoPropertiesActions | LoadingActions;

export type MomoPropertiesActions =
  ActionMap<MomoPropertiesPayload>[keyof ActionMap<MomoPropertiesPayload>];

export const momoPropertiesReducer = (
  state: MomoProperties,
  action: AppActions
): MomoProperties => {
  switch (action.type) {
    case Types.SetBackgroundImage:
      return {
        ...state,
        backgroundImage: action.payload.image,
      };
    case Types.SetBottomText:
      return {
        ...state,
        bottomText: action.payload.text,
      };
    case Types.SetBrightness:
      return {
        ...state,
        brightness: action.payload.value,
      };
    case Types.SetMomoTemplate:
      return {
        ...state,
        momoTemplate: action.payload.template,
      };
    case Types.SetPreviewImage:
      return {
        ...state,
        previewImage: action.payload.image,
      };
    case Types.SetSaturation:
      return {
        ...state,
        saturation: action.payload.value,
      };
    case Types.SetTopText:
      return {
        ...state,
        topText: action.payload.text,
      };
    default:
      return state;
  }
};

type LoadingPayload = {
  [Types.SetLoading]: {
    value: boolean;
  };
};

export type LoadingActions =
  ActionMap<LoadingPayload>[keyof ActionMap<LoadingPayload>];

export const loadingReducer = (
  state: boolean,
  action: AppActions,
) => {
  switch (action.type) {
    case Types.SetLoading:
      return action.payload.value;
    default:
      return state;
  }
};
