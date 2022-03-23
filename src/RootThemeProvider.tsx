import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import React, { FC, ReactNode } from "react";

interface RootThemeProps {
  children: ReactNode;
}

declare module "@mui/material/styles" {
    export interface Palette {
        neutral: {
            main: string
        };
      }
      interface PaletteOptions {
        neutral: {
            main: string;
        }
      }
  }

const RootThemeProvider: FC<RootThemeProps> = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#121313",
      },
      secondary: {
        main: "#DE7212",
      },
      neutral: {
        main: "#D0CFCF",
      },
      contrastThreshold: 3,
      tonalOffset: 0.3,
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default RootThemeProvider;
