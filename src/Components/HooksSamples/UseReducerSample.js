import React, { useReducer } from "react";
import MuiButton from "../MuiButton";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const reducer = (state, action) => {
  // 액션 타입을 case에 정의하고, value를 변화
  switch (action.type) {
    case "INCREMENT": {
      return { value: state.value + 1 };
    }
    case "DECREMENT": {
      return { value: state.value - 1 };
    }
    default:
  }
};

const UseReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const onClick = (type) => {
    dispatch({ type });
  };
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent='flex-start'
        alignItems='center'
      >
        <Grid item xs={12} justifyContent='center' alignItems='center'>
          <Stack justifyContent='center' alignItems='center'>
            현재 카운터 값은 {state.value}입니다
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <MuiButton onClick={() => onClick("INCREMENT")}>+1</MuiButton>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <MuiButton onClick={() => onClick("DECREMENT")}>-1</MuiButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default UseReducerSample;
