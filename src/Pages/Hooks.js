import React, { useState } from "react";
import MuiButton from "../Components/MuiButton";

const Hooks = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <MuiButton
        onClick={() => setValue(value + 1)}
        sx={{ width: "120px", margin: "12px 0" }}
      >
        +1
      </MuiButton>
      <MuiButton onClick={() => setValue(value - 1)} sx={{ width: "120px" }}>
        -1
      </MuiButton>
    </>
  );
};

export default Hooks;
