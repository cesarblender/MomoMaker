import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/context";

export function Preview() {
  const { state } = useContext(AppContext);

  return (
    <Grid item lg={6} md={4} sm={12}>
      <Box sx={{ paddingTop: 4 }}>
        <Typography variant="h4">Vista previa</Typography>
        <br />
        {state.loading ? (
          <CircularProgress />
        ) : (
          <img src={state.momoProperties.previewImage} alt="meme" style={{ width: "100%" }} />
        )}
      </Box>
    </Grid>
  );
}
