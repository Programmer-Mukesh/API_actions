import React from "react";
import TextField from "@material-ui/core/TextField";

export const InputField = ({ text, event, label, value }) => {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label={label}
        variant="outlined"
        value={value}
        type={text}
        name={text}
        onChange={event}
      />
    </div>
  );
};
