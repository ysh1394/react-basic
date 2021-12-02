import React, { useReducer } from "react";
import MuiButton from "../MuiButton";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const reducer = (state, action) => {
  // 액션 타입을 case에 정의하고, value를 변화

  switch (action.type) {
    case "INCREMENT": {
      return { ...state, value: state.value + 1 };
    }
    case "DECREMENT": {
      return { ...state, value: state.value - 1 };
    }
    case "INPUT": {
      return {
        ...state,
        // 동적으로 네임 값을 접근하기 위해서는 페이로드로 감싸서 접근해야함
        [action.payload.name]: action.payload.value,
      };
    }
    default:
  }
  // return {
  //   ...state,
  //   [action.name]: action.value,
  // };
  // 위의 주석은 하나의 리듀서로 관리할때는 하나의 리턴값만 가질 수 있기 때문에 타입을 정의 할 수 있는 방법으로 접근 필요
};

const inputReducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const UseReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    name: "",
    nickname: "",
  });
  // const [inputState, inputDispatch] = useReducer(inputReducer, {
  //   name: "",
  //   nickname: "",
  // });

  const onClick = (type) => {
    dispatch({ type });
  };

  const onChange = ({ target }, type) => {
    dispatch({ type, payload: target });
    // 인풋을 하나의 리듀서에서 관리하기 위해서는 페이로드 객체를 감싸서 사용
  };

  // const onChangeInputValue = (e) => {
  //   inputDispatch(e.target);
  // };

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
      <Grid
        container
        spacing={1}
        justifyContent='flex-start'
        alignItems='center'
        sx={{ mt: "40px" }}
      >
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <TextField
              id='standard-basic'
              label='name'
              variant='standard'
              name='name'
              value={state.name}
              onChange={(e) => onChange(e, "INPUT")}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <TextField
              id='standard-basic'
              label='nickname'
              variant='standard'
              name='nickname'
              value={state.nickname}
              onChange={(e) => onChange(e, "INPUT")}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <Typography variant='p' component='p'>
              이름 : {state.name}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <Typography variant='p' component='p'>
              닉네임 : {state.nickname}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default UseReducerSample;
