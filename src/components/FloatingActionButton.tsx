import { Fab } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export function FloatingActionButton() {
  return (
    <Fab
      variant="extended"
      sx={{ position: "fixed", bottom: 10, right: 10 }}
      color="primary"
      href="https://github.com/seokkuuu/momomaker"
      target="blank"
    >
      <GitHub sx={{ mr: 1 }} />
      GitHub
    </Fab>
  );
}
