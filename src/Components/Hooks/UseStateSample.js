import React, { useState, useEffect, forwardRef } from "react";
import MuiButton from "../MuiButton";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const UseStateSample = ({ isMount, setIsMount, inputValue, setInputValue }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [unMount, setUnmount] = useState("");
  const [update, setUpdate] = useState("");

  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    return () => {
      console.log("마지막 clean input", inputValue);
      alert("마지막에만 발동하는 언마운트");
    };
  }, []);

  useEffect(() => {
    console.log("update input", inputValue);
    setUpdate(`업데이트 ${inputValue.name} ${inputValue.nickname}`);

    return () => {
      setUnmount(`언마운트 ${inputValue.name} ${inputValue.nickname}`);
      console.log("인풋 입력시 뒤따라 오는 clean input", inputValue);
    };
  }, [inputValue]);

  const onChangeInputValue =
    (prop) =>
    ({ target: { value } }) => {
      setInputValue({
        ...inputValue,
        [prop]: value,
      });
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
            현재 카운터 값은 {count}입니다
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <MuiButton onClick={() => setCount(count + 1)}>+1</MuiButton>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <MuiButton onClick={() => setCount(count - 1)}>-1</MuiButton>
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
              value={inputValue.name}
              onChange={onChangeInputValue("name")}
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
              value={inputValue.nickname}
              onChange={onChangeInputValue("nickname")}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <Typography variant='p' component='p'>
              이름 : {inputValue.name}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <Typography variant='p' component='p'>
              닉네임 : {inputValue.nickname}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={update ? true : false}
      >
        <Alert severity='success' sx={{ width: "100%" }}>
          {update}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={unMount ? true : false}
      >
        <Alert severity='error' sx={{ width: "100%" }}>
          {unMount}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UseStateSample;
