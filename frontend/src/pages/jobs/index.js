import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { useTheme } from "@mui/material/styles";

// Import Components
import { Grid } from "@mui/material";
import JobCard from "@/components/JobCard";
import Search from "@/components/Search";
import Loading from "@/components/Loading";

function Jobs() {
  const theme = useTheme();
  const [jobs, setJobs] = useState(null);

  useEffect(function fetchWhenMounted() {
    async function fetchData() {
      let data = await JoblyApi.getJobs();
      setJobs(data);
    }

    fetchData();
  }, []);

  if (jobs === null) {
    return <Loading theme={theme} />;
  }

  const search = async (qString) => {
    if (!qString) {
      let data = await JoblyApi.getJobs();
      setJobs(data);
    } else {
      let data = await JoblyApi.searchJobs(qString);
      setJobs(data);
    }
  };

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
        <Search item={"job positions"} search={search} />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{m: '5px auto'}}>
        {jobs.length > 0 ? jobCards : 'No matching positions found...'}
      </Grid>
    </Grid>
  );
}

export default Jobs;
