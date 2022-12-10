import React, { useState } from "react";

const useInput = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const reset = (e) => {
    setValue((e.target.value = ""));
  };

  return {
    value,
    onChange,
    type,
    setValue,
    reset,
  };
};

export default useInput;
