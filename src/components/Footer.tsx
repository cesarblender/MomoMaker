import {
  Box,
  Typography,
  Container,
  Button,
  Divider,
  IconButton,
} from "@mui/material";

import { Facebook, GitHub } from "@mui/icons-material";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <Box sx={{ height: 60 }} />
      <Container>
        <Box sx={{ display: "flex" }} component="footer">
          <Typography variant="h5" component="h5" sx={{ flexGrow: 1 }}>
            MomoGenerator
          </Typography>
          <Button href="https://github.com/seokkuuu/momogen.cf" target="blank">
            Código fuente
          </Button>
        </Box>
        <Divider />
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
            @Seokku
          </Typography>
          <IconButton href="https://github.com/seokkuuu" target="blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://facebook.com/seokkuuu" target="blank">
            <Facebook />
          </IconButton>
        </Box>
      </Container>
    </Fragment>
  );
}
