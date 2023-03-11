import React, { useState } from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search({ item, search }) {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(inputValue);
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <Paper
      component="form"
      elevation={10}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        m: "15px auto",
      }}
      style= {{ width: '100vw', maxWidth: '400px'}}
      onSubmit={handleSubmit} // add onSubmit handler to the form
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={`Search ${item}`}
        inputProps={{ "aria-label": `search for ${item}` }}
        onChange={handleChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
