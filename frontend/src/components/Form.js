import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import useFields from "@/hooks/useFields";

function Form({ fields, initialValues, handleSubmit, buttonText }) {
  const [formData, handleChange] = useFields(initialValues);

  const renderFields = fields.map((field) => {
    return (
      <Grid
        item
        key={field.name}
      >
        <TextField
          className="Form-input"
          name={field.name}
          label={field.label}
          value={formData[field.name]}
          type={field.name === "password" ? "password" : "text"}
          onChange={handleChange}
          required
          style={{width: '350px'}}
        />
      </Grid>
    );
  });

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
      style={{ width: "100vw" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{mt: 3}}
      >
        {renderFields}
        <Grid item>
          <Button variant="contained" type="submit" sx={{width: '200px'}}>
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
