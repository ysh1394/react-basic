import React, { useRef, useCallback, useReducer, useMemo } from "react";
import MuiButton from "../MuiButton";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useInputs from "../../Hooks/useInputs";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case "ADD_LIST": {
      return {
        ...state,
        list: action.payload.newList,
      };
    }
  }
};

const UseMemoSample = () => {
  const focusRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, {
    averageInput: "",
    list: [],
  });
  const [inputState, onChange, resetInput] = useInputs({ custom: "" });

  console.log("asd > >", inputState);

  const getAverage = (list) => {
    console.log("평균값 계산, useMemo 사용 전후 비교 콘솔로그");
    const sum =
      list?.length > 0 ? list.reduce((a, b) => parseInt(a) + parseInt(b)) : 0;
    return list?.length > 0 ? sum / list.length : 0;
  };

  const onChangeInputValue = useCallback((e, type) => {
    dispatch({ type, payload: e.target });
  }, []);

  const onSubmit = useCallback(() => {
    if (!state.averageInput) {
      return;
    } else {
      const newList = [...state.list, state.averageInput];

      dispatch({ type: "ADD_LIST", payload: { newList } });
      dispatch({ type: "INPUT", payload: { name: "averageInput", value: "" } });
      resetInput("custom", "");
      focusRef.current.focus();
    }
  }, [state.list, state.averageInput]);

  const avg = useMemo(() => getAverage(state.list), [state.list]);

  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Grid item xs={4} justifyContent="center" alignItems="center">
            <Typography>커스텀 인풋</Typography>
          </Grid>
          <Grid item xs={4} justifyContent="center" alignItems="center">
            <TextField
              id="standard-basic"
              placeholder="average"
              variant="standard"
              name="custom"
              value={inputState.custom}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={4} justifyContent="center" alignItems="center">
            <input
              ref={focusRef}
              type="number"
              id="standard-basic"
              placeholder="average"
              variant="standard"
              name="averageInput"
              value={state.averageInput}
              onKeyPress={(e) => e.key === "Enter" && onSubmit()}
              onChange={(e) => onChangeInputValue(e, "INPUT")}
            />
          </Grid>
          <Grid item xs={4} justifyContent="center" alignItems="center">
            <MuiButton onClick={onSubmit}>등록</MuiButton>
          </Grid>
        </Grid>
        {state.list?.length > 0 &&
          state.list.map((arr, idx) => {
            return (
              <Grid
                sx={{ mt: 0.5 }}
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="center"
                key={idx}
              >
                {idx + 1}. {arr}
              </Grid>
            );
          })}

        {state.list?.length > 0 && (
          <Grid
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="center"
            sx={{ mt: 1 }}
          >
            평균 : {avg}
          </Grid>
        )}

        <Grid item xs={6}>
          <Stack justifyContent="center" alignItems="center"></Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default UseMemoSample;
