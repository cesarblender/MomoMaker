import "./assets/App.css";
import { Toolbar, Box, Typography, Container, Button, Divider, IconButton } from "@mui/material";

import { Appbar } from "./components/Appbar";

import AppBody from "./components/AppBody";
import { Facebook, GitHub } from "@mui/icons-material";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar />
      <Toolbar />
      <AppBody />
      <Box sx={{ height: 60 }} />
      <Container>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" component="h5" sx={{ flexGrow: 1 }}>
            MomoGenerator
          </Typography>
          <Button href="https://github.com/seokkuuu/momomaker" target="blank">
            Código fuente
          </Button>
          <Button
            href="https://github.com/seokkuuu/momomaker/blob/main/LICENSE"
            target="blank"
          >
            Licensia
          </Button>
          <Button
            href="https://github.com/seokkuuu/momomaker/blob/main/README.md"
            target="blank"
          >
            Readme
          </Button>
        </Box>
        <Divider />
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
            Seokku
          </Typography>
          <IconButton href="https://github.com/seokkuuu" target="blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://facebook.com/seokkuuu" target="blank">
            <Facebook />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
