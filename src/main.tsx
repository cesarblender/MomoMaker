import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import { teal } from "@mui/material/colors";

import { AppProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
            primary: teal,
          },
          shape: {
            borderRadius: 21
          }
        })}
      >
        <CssBaseline enableColorScheme />

        <ScopedCssBaseline enableColorScheme>
          <App />
        </ScopedCssBaseline>
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
