import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SliderComponent from "./SliderComponent";
import { Box, styled, Typography } from "@mui/material";
import CommonMenu from "./CommonMenu";

const HeaderBar = () => {
  return (
    <>
      <SliderComponent>
        <AppBar>
          <Toolbar>
            <Typography variant="subtitle1" component="div" fontSize={18} noWrap sx={{cursor: "pointer", mr: "10px"}}>
              mdn web docs
            </Typography>
           <CommonMenu menuName="References" />
           <CommonMenu menuName="Guides"/>
          </Toolbar>
        </AppBar>
      </SliderComponent>
      <Toolbar />
    </>
  );
};

export default HeaderBar;
