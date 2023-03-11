import React, {useContext, useState} from "react";
import { Grid, CardContent, Divider, Typography, Button } from "@mui/material";
import Image from "next/image";
import uuid4 from "uuid4";
import { UserContext } from "@/context/UserContext";
import Loading from "@/components/Loading";

function CompanyInfoCard({ name, logo, description, numEmployees, jobs, theme }) {
  const { user, handleApplyJob } = useContext(UserContext);
  
  if (!user) {
    return <Loading theme={theme} />
  }
  

  const jobCards = jobs.map((job) => {

    const [applied, setApplied] = useState(
    user.applications.indexOf(job.id) !== -1
  );

    return (
      <CardContent
        key={uuid4()}
        style={{
          backgroundColor: `${theme.palette.secondary.main}`,
          color: `${theme.palette.text.main}`,
          display: "flex",
          flexDirection: "column",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography>{job.salary ? "$" + job.salary : ""}</Typography>
        </div>

        
        <Button
          variant="outlined"
          style={{
            color: `${theme.palette.accent.main}`,
            backgroundColor: `${applied ? theme.palette.accent.secondary : ""}`,
          }}
          onClick={() => {
            handleApplyJob(user.username, job.id)
            setApplied(true);
          }}
          disabled={applied}>
          {applied ? "Applied" : "Apply"}
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
        width={1300}
        height={1300}
        style={{
          maxHeight: "50vh",
          maxWidth: "50vw",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
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