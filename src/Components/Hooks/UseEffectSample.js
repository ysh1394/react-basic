import React, { useState, useEffect, forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import MuiButton from "../MuiButton";
import UseStateSample from "./UseStateSample";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const UseEffectSample = ({
  expanded,
  isMount,
  setIsMount,
  inputValue,
  setInputValue,
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => {
      console.log("update clean");
      setIsUpdate(false);
    };
  }, []);

  useEffect(() => {
    if (expanded === "panel2") {
      setIsUpdate(true);
    }

    return () => {
      setIsUpdate(false);
    };
  }, [isUpdate, expanded]);

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleClose = (e, reason) => {
    console.log("reason >>", reason);

    if (reason === "clickaway") {
      return;
    }

    // setIsMount((values) => ({ ...values, open: false }));
  };

  return (
    <>
      <MuiButton onClick={handleClick}>
        {visible ? "숨기기" : "보이기"}
      </MuiButton>
      {visible && (
        <UseStateSample
          isMount={isMount}
          setIsMount={setIsMount}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isUpdate}
      >
        <Alert severity='success' sx={{ width: "100%" }}>
          UPDATE
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={!isUpdate}
        // autoHideDuration={6000}
        // onClose={handleClose}
      >
        <Alert
          // onClose={handleClose}
          severity='error'
          sx={{ width: "100%" }}
        >
          UNMOUNT
        </Alert>
      </Snackbar>
    </>
  );
};

export default UseEffectSample;
