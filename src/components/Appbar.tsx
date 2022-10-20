import { IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { useContext } from "react";

export function Appbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          MomoMaker{" "}
          <Typography variant="body1" component="i" sx={{ flexGrow: 1 }}>
            [alpha-v0.0.1]
          </Typography>
        </Typography>
        <IconButton
          href="https://facebook.com/seokkuuu"
          target="blank"
          color="inherit"
        >
          <Facebook />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
