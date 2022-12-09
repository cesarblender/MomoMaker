import { AppBar, Toolbar, Typography } from "@mui/material";

export function Appbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          MomoGen.cf
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
