import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import JobCard from "@/components/JobCard";
import Search from "@/components/Search";

function Jobs() {
  const theme = useTheme();
  const [jobs, setJobs] = useState([]);

  useEffect(function fetchWhenMounted() {
    async function fetchData() {
      let data = await JoblyApi.getJobs();
      setJobs(data);
    }

    fetchData();
  }, []);

  const jobCards = jobs.map((job) => {
    return (
      <JobCard
        logo={job.logo}
        title={job.title}
        companyName={job.companyName}
        salary={job.salary}
        theme={theme}
      />
    );
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ m: 'auto'}}
      style={{ backgroundColor: `${theme.palette.background.main}` }}>
      <Grid item>
        <Search item={"jobs"} />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{m: '5px auto'}}>
        {jobCards}
      </Grid>
    </Grid>
  );
}

export default Jobs;
