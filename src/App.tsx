import { useContext } from "react";
import * as htmlToImage from "html-to-image";
import { useRef, useEffect } from "react";
import "./assets/App.css";
import {
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Slider,
  ButtonGroup,
} from "@mui/material";
import { UploadFile, Download } from "@mui/icons-material";

import { Appbar } from "./components/Appbar";
import { Preview } from "./components/Preview";
import { TempPreviewImage } from "./components/TempPreviewImage";
import { FloatingActionButton } from "./components/FloatingActionButton";

import { Types } from "./context/reducers";
import { AppContext, MomoTemplate } from "./context/context";

export default function App() {
  const momo = useRef<HTMLDivElement>(null);
  const fileUploader = useRef<HTMLInputElement>(null);

  const { state, dispatch } = useContext(AppContext);

  async function generateMomo() {
    if (momo.current !== null) {
      dispatch({
        type: Types.SetLoading,
        payload: { value: true },
      });

      const image = await htmlToImage.toPng(momo.current);

      dispatch({
        type: Types.SetPreviewImage,
        payload: { image },
      });

      dispatch({
        type: Types.SetLoading,
        payload: { value: false },
      });
    }
  }

  const downloadImage = async () => {
    if (momo.current !== null) {
      const dataUrl = await htmlToImage.toPng(momo.current);

      const link = document.createElement("a");
      link.download = `momo-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  useEffect(() => {
    generateMomo();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar />
      <Toolbar />
      <Container>
        <Grid container spacing={2}>
          <Preview {...{ generateMomo }} />
          <Grid item lg={6} md={8} sm={12}>
            <Box
              sx={{
                paddingY: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">Crear momo</Typography>
              <br />
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
              <br />
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
              <br />

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
              <Typography variant="h4">Configurar foto de fondo</Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => fileUploader.current?.click()}
                startIcon={<UploadFile />}
              >
                Subir foto de fondo
              </Button>
              <br />
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
              <br />
              <ButtonGroup variant="contained">
                <Button
                  fullWidth
                  onClick={downloadImage}
                  startIcon={<Download />}
                >
                  Descargar momo
                </Button>
                <Button fullWidth disabled>
                  Compartir en OneSpace
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <TempPreviewImage {...{ momo }} />
      <FloatingActionButton />
      <Box sx={{ height: 60 }} />
    </Box>
  );
}
