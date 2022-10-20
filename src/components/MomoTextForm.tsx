import { useContext } from "react";
import { TextField } from "@mui/material";

import { Types } from "../context/reducers";
import { AppContext } from "../context/context";

export default function MomoTextForm() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <TextField
        label="Texto de arriba"
        variant="outlined"
        multiline
        value={state.momoProperties.topText}
        onChange={(e) =>
          dispatch({
            type: Types.SetTopText,
            payload: { text: e.target.value },
          })
        }
      />
      <br />
      <TextField
        label="Texto de abajo"
        variant="outlined"
        multiline
        value={state.momoProperties.bottomText}
        onChange={(e) =>
          dispatch({
            type: Types.SetBottomText,
            payload: { text: e.target.value },
          })
        }
      />
    </>
  );
}
