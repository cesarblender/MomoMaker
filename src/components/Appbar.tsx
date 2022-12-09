import { IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import { Facebook, GitHub } from "@mui/icons-material";

export function Appbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          MomoGen.cf
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
