import React from "react";
import { Grid, CardContent, Divider, Typography, Button } from "@mui/material";
import Image from "next/image";

function CompanyInfoCard({ name, logo, description, numEmployees, jobs, theme }) {
  
  const jobCards = jobs.map((job) => {
    return (
      <CardContent
        style={{
          backgroundColor: `${theme.palette.secondary.main}`,
          color: `${theme.palette.text.main}`,
          display: "flex",
          flexDirection: 'column',
        }}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography>{job.salary ? "$" + job.salary : ""}</Typography>
        </div>

        <Button
          variant="outlined"
          style={{
            color: `${theme.palette.accent.main}`,
            width: "200px",
            height: "50px",
            margin: '20px auto'
          }}>
          Apply
        </Button>
        <Divider />
      </CardContent>
    );
  });

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      direction="column"
      style={{ height: "auto" }}>
      <Image
        src={
          logo
            ? logo
            : "https://previews.123rf.com/images/doublerdesign/doublerdesign1911/doublerdesign191100109/133223058-simple-building-icon-logo-design-inspiration-vector-illustration-template.jpg"
        }
        alt={`${name} Logo`}
        width={500}
        height={400}
      />
      <CardContent
        style={{
          backgroundColor: `${theme.palette.secondary.main}`,
          color: `${theme.palette.text.main}`,
        }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <br />
        <Divider />
        {jobCards}
      </CardContent>
    </Grid>
  );
}


export default CompanyInfoCard;