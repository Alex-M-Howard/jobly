import React from "react";

// Import Material UI
import {InputBase, Paper, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function Search({item, theme}){

  return(
    <Paper
      component="form"
      elevation={10}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, m: '15px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={`Search ${item}`}
        inputProps={{ 'aria-label': `search ${item}` }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search;
