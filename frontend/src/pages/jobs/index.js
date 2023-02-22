import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card variant="outlined" sx={{ maxWidth: 425 }}>
          <Card
            sx={{ display: "flex" }}
            style={{ backgroundColor: `${theme.palette.secondary.main}` }}>
            <CardMedia
              component="img"
              sx={{ width: 125 }}
              image={
                job.logo
                  ? job.logo
                  : "https://previews.123rf.com/images/doublerdesign/doublerdesign1911/doublerdesign191100109/133223058-simple-building-icon-logo-design-inspiration-vector-illustration-template.jpg"
              }
              alt={job.companyName}
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <div>
                  <Typography
                    component="div"
                    variant="h6"
                    style={{
                      fontWeight: "bold",
                      color: `${theme.palette.text.main}`,
                    }}>
                    {job.companyName}
                  </Typography>
                </div>
                <Typography
                  variant="subtitle1"
                  style={{ color: `${theme.palette.text.main}`, marginBottom: '2px' }}
                  component="div">
                  {job.title}
                </Typography>
                <Typography
                  align="right"
                  style={{ color: `${theme.palette.text.main}`, fontStyle: 'italic'}}>
                  {job.salary ? "$" + job.salary : ""}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        style={{ marginTop: "5px", padding: "10px" }}>
        {jobCards}
      </Grid>
    </div>
  );
}

export default Jobs;
