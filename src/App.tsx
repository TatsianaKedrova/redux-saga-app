import { Box, Container, Grid, Paper, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  getLatestNews,
} from "./redux/actions/actionCreatot";
import { RootState } from "./redux/store";

const App = () => {
  const counter = useSelector<RootState, number | undefined>(
    (state) => state.counter?.count
  );
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#454949" : "#F2F9F9",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
    margin: "10px",
  }));

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <Box sx={{ flexGrow: 2, backgroundColor: "green"}}>
      <Grid container spacing={2} sx={{backgroundColor: "pink", }}>
        <Grid item xs={12}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4} >
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;

// <div>
//   <button onClick={handleDecrease}>-1</button>
//   <button onClick={handleIncrease}>+1</button>
//   <button onClick={handleNews}>Get Latest News</button>
//   <h1>{counter}</h1>
// </div>
