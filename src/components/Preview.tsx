import { Grid, Typography, Box, CircularProgress, Button } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "../context/context";

export function Preview({ generateMomo }: { generateMomo: () => void }) {
  const { state } = useContext(AppContext);

  return (
    <Grid item lg={6} md={4} sm={12}>
      <Box sx={{ paddingTop: 4 }}>
        <Typography variant="h4">Vista previa</Typography>
        <br />
        <Button
          variant="contained"
          onClick={generateMomo}
          startIcon={<Visibility />}
          fullWidth
          sx={{marginBottom:3}}
        >
          Recargar vista previa
        </Button>
        {state.loading ? (
          <CircularProgress />
        ) : (
          <img
            src={state.momoProperties.previewImage}
            alt="meme"
            style={{ width: "100%" }}
          />
        )}
      </Box>
    </Grid>
  );
}
