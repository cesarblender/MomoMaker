import { useContext } from "react";
import { Typography, Slider } from "@mui/material";

import { Types } from "../context/reducers";
import { AppContext } from "../context/context";

export default function MomoConfigureImageForm() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <Typography variant="h5">Saturación</Typography>
      <Slider
        value={state.momoProperties.saturation}
        marks={true}
        valueLabelDisplay="auto"
        onChange={(_ev, newValue) => {
          dispatch({
            type: Types.SetSaturation,
            payload: { value: newValue as number },
          });
        }}
        aria-labelledby="Saturación"
        min={0}
        max={15}
      />
      <Typography variant="h5">Brillo</Typography>
      <Slider
        value={state.momoProperties.brightness}
        marks={true}
        valueLabelDisplay="auto"
        onChange={(_ev, newValue) => {
          dispatch({
            type: Types.SetBrightness,
            payload: { value: newValue as number },
          });
        }}
        aria-labelledby="Brillo"
        min={1}
        max={4}
      />
    </div>
  );
}
