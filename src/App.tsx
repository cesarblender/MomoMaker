import "./assets/App.css";
import { Toolbar, Box, Typography, Container, Button, Divider, IconButton } from "@mui/material";

import { Appbar } from "./components/Appbar";

import AppBody from "./components/AppBody";
import { Facebook, GitHub } from "@mui/icons-material";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box>
      <Appbar />
      <Toolbar />
      <AppBody />
      <Footer />
    </Box>
  );
}
