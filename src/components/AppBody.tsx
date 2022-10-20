import { useContext } from "react";
import { useRef } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Download } from "@mui/icons-material";

import { Preview } from "./Preview";

import { AppContext } from "../context/context";
import MomoTextForm from "./MomoTextForm";
import MomoTemplateForm from "./MomoTemplateForm";
import MomoFileSelectForm from "./MomoFileSelectForm";
import MomoConfigureImageForm from "./MomoConfigureImageForm";

export default function AppBody() {
  const { state } = useContext(AppContext);

  const downloadMomo = async () => {
    // Get the image from the context state
    const dataUrl = state.momoProperties.previewImage;

    // Create a <a ... /> element
    const link = document.createElement("a");

    // Set the filename to the download argument
    link.download = `momo-${Date.now()}.png`;

    // Set the base64 image path to download it
    link.href = dataUrl;

    // Click the <a ... /> element to start the image download
    link.click();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Preview />
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
            <MomoTextForm />
            <br />
            <MomoTemplateForm />
            <br />
            <Typography variant="h4">Configurar foto de fondo</Typography>
            <br />
            <MomoFileSelectForm />
            <br />
            <MomoConfigureImageForm />
            <br />
            <ButtonGroup variant="contained">
              <Button fullWidth onClick={downloadMomo} startIcon={<Download />}>
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
  );
}
