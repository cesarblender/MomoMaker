import { Grid, Typography, Box, CircularProgress, Button } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context/context";
import { Types } from "../context/reducers";
import * as htmlToImage from "html-to-image";

export function Preview() {
  const { dispatch, state } = useContext(AppContext);
  const momoRef = useRef<HTMLDivElement>(null);

  async function generateMomo() {
    // After save the image on the state, check if the momoRef variable is initialized
    if (momoRef.current !== null) {
      // Set loading to true
      dispatch({
        type: Types.SetLoading,
        payload: { value: true },
      });

      // Transform the momoRef element to a png image
      const image = await htmlToImage.toPng(momoRef.current);

      // Save the image to the global state
      dispatch({
        type: Types.SetPreviewImage,
        payload: { image },
      });

      // Set loading to false
      dispatch({
        type: Types.SetLoading,
        payload: { value: false },
      });
    }
  }

  useEffect(() => {
    // When the component mounts, call the generateMomo function
    generateMomo();
  }, []);

  return (
    <Grid item lg={6} md={4} sm={12}>
      <Box sx={{ paddingTop: 4 }}>
        <Typography variant="h4">Vista previa</Typography>
        <br />
        {/* Reload the preview image */}
        {/* Note: I did it, because, realtime image generation makes the device go slow */}
        <Button
          variant="contained"
          onClick={generateMomo}
          startIcon={<Visibility />}
          fullWidth
          sx={{ marginBottom: 3 }}
        >
          Recargar vista previa
        </Button>
        {/* If loading is true, show a CircularProgress, else, show the image preview */}
        {state.loading ? (
          <CircularProgress />
        ) : (
          // Image preview
          <img
            src={state.momoProperties.previewImage}
            alt="meme"
            style={{ width: "100%" }}
          />
        )}
      </Box>
      {/* Hide the temp element for the user */}
      <div style={{ position: "absolute", top: "-200%", left: "-200%" }}>
        {/* Temp image */}
        <div ref={momoRef}>
          <Momo />
        </div>
      </div>
    </Grid>
  );
}

function Momo() {
  const { state } = useContext(AppContext);
  return (
    <div
      className="meme"
      style={{
        backgroundImage: `url(${state.momoProperties.backgroundImage})`,
        filter: `saturate(${state.momoProperties.saturation}) brightness(${
          state.momoProperties.brightness / 2 + 0.5
        })`,
      }}
    >
      <div className="meme_text">
        {state.momoProperties.topText.split("\n").map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="meme_text">
        {state.momoProperties.bottomText.split("\n").map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
