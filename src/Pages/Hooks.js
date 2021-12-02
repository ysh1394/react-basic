import React, { useState, forwardRef, useEffect } from "react";
import UseStateSample from "../Components/HooksSamples/UseStateSample";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UseEffectSample from "../Components/HooksSamples/UseEffectSample";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import UseReducerSample from "../Components/HooksSamples/UseReducerSample";
import UseMemoSample from "../Components/HooksSamples/UseMemoSample";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Hooks = () => {
  const [expanded, setExpanded] = useState(false);
  const [mount, setMount] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    nickname: "",
  });
  const [isMount, setIsMount] = useState(false);

  const { open, vertical, horizontal } = mount;

  useEffect(() => {
    setMount((values) => ({ ...values, open: true }));

    return () => setMount((values) => ({ ...values, open: false }));
  }, []);

  const handleClose = (e, reason) => {
    console.log("reason >>", reason);

    if (reason === "clickaway") {
      return;
    }

    setMount((values) => ({ ...values, open: false }));
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        // autoHideDuration={6000}
        // onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: "100%" }}>
          최초 마운트 시 발생됩니다. 페이지가 바뀌면 사라집니다.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={!open}
        // autoHideDuration={6000}
        // onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
          언마운트 상태입니다. 보이지 않습니다.
        </Alert>
      </Snackbar>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>useState 기본 예제</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UseStateSample
            isMount={isMount}
            setIsMount={setIsMount}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>useEffect 기본 예제</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UseEffectSample
            expanded={expanded}
            isMount={isMount}
            setIsMount={setIsMount}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>useReducer 기본 예제</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UseReducerSample />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>
            useMemo, useCallback, useRef, customHooks 기본 예제
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UseMemoSample />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Hooks;
