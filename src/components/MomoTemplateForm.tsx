import { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { Types } from "../context/reducers";
import { AppContext, MomoTemplate } from "../context/context";

export default function MomoTemplateForm() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Plantilla</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.momoProperties.momoTemplate}
          label="Plantilla"
          onChange={(ev) => {
            dispatch({
              type: Types.SetMomoTemplate,
              payload: {
                template: ev.target.value as MomoTemplate,
              },
            });
          }}
        >
          <MenuItem value={MomoTemplate.Grasoso}>Grasoso</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
