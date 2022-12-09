import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import { red } from "@mui/material/colors";

import { AppProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
            primary: red,
            background: {
              default: "#000",
              paper: "#1a1a1a"
            },
          },
          shape: {
            borderRadius: 21
          },
          components: {
            MuiAppBar: {
              defaultProps: {
                color: "transparent",
                elevation: 0,
                sx: {
                  backdropFilter: "blur(8px)"
                }
              },
            }
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
