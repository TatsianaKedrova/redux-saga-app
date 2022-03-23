import { Box, styled, Typography } from "@mui/material";
import React from "react";

type CommonMenuPropsType = {
  menuName: string;
};

const StyledMenuItem = styled("div")(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontSize: "17px",
  ":hover": {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "3px",
    padding: "5px",
  },
}));

const CommonMenu: React.FC<CommonMenuPropsType> = ({ menuName }) => {
  return (
    <Box sx={{ mx: "20px" }}>
      <StyledMenuItem>{menuName}</StyledMenuItem>
    </Box>
  );
};

export default CommonMenu;
