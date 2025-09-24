import { Grid, TextField } from "@mui/material";
import { inputObject } from "../customObjects/InputObject";
import React from "react";

const UserForm = ({ formData, handleChange }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} sx={{ p: 1 }}>
      {inputObject.map((item) => (
        <Grid size={{ xs: 12, sm: 12, md: 6 }} key={item.id}>
          <TextField
            fullWidth
            type={item.type}
            id={item.id}
            label={item.label}
            variant="outlined"
            value={formData[item.id] || " "}
            onChange={handleChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(UserForm);
