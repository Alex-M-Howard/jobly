import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import JobCard from "@/components/JobCard";

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
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        style={{  padding: "10px", backgroundColor: `${theme.palette.background.main}`,
         }}>
        {jobCards}
      </Grid>
    </div>
  );
}

export default Jobs;
