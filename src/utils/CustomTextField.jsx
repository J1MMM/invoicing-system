import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

function CustomTextField({ label, type, value, name, onChange, readOnly }) {
  return (
    <Stack gap={1} direction="row">
      <Typography>{label}:</Typography>
      <TextField
        type={type || "text"}
        variant="standard"
        size="small"
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        slotProps={{ input: { readOnly: readOnly || false } }}
        required
      />
    </Stack>
  );
}

export default CustomTextField;
