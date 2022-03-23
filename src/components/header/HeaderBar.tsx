import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SliderComponent from "./SliderComponent";
import { Typography } from "@mui/material";

const HeaderBar = () => {
  return (
    <>
      <SliderComponent>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to Hide App Bar
            </Typography>
          </Toolbar>
        </AppBar>
      </SliderComponent>
      <Toolbar />
    </>
  );
};

export default HeaderBar;
