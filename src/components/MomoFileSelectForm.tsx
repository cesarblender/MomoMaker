import { useContext } from "react";
import { useRef } from "react";
import { Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";

import { Types } from "../context/reducers";
import { AppContext } from "../context/context";

export default function MomoFileSelectForm() {
  const fileUploader = useRef<HTMLInputElement>(null);

  const { dispatch } = useContext(AppContext);

  return (
    <>
      <input
        type="file"
        ref={fileUploader}
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files) {
            dispatch({
              type: Types.SetBackgroundImage,
              payload: {
                image: URL.createObjectURL(e.target.files[0]),
              },
            });
          }
        }}
      />
      <Button
        variant="contained"
        onClick={() => fileUploader.current?.click()}
        startIcon={<UploadFile />}
      >
        Subir foto de fondo
      </Button>
    </>
  );
}
