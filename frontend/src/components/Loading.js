import React from "react";
import { Grid, CircularProgress } from "@mui/material";

function Loading({theme}) {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '50vh'}}>
      <Grid item>
        <CircularProgress
          size={70}
          style={{ color: `${theme.palette.secondary.main}` }}
        />
      </Grid>
    </Grid>
  );
}

export default Loading;