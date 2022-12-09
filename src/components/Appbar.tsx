import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

export function Appbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar
          src="/favicon.svg"
          sx={{ height: 30, width: 30, marginRight: 2 }}
        />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          MomoGen.cf
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
