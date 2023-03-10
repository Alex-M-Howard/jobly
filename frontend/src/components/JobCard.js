import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { UserContext } from "@/context/UserContext";
import Loading from "@/components/Loading";


function JobCard({ id, logo, companyName, title, salary, theme }) {
  const { user, handleApplyJob } = useContext(UserContext);

  if (!user || !user.applications) {
    return <Loading theme={theme} />;
  }
  
  const [applied, setApplied] = useState(user.applications.indexOf(id) !== -1);


  useEffect(() => {
    setApplied(user.applications.indexOf(id) !== -1);
  }, [user]);

  return (
    <Grid item xs={12} sm={8} md={6} lg={4} sx={{ m: 1 }}>
      <Card variant="outlined" sx={{ maxWidth: 425, m: " 5px auto" }}>
        <Card
          sx={{ display: "flex" }}
          style={{ backgroundColor: `${theme.palette.secondary.main}` }}>
          <CardMedia
            component="img"
            sx={{ width: 125 }}
            image={
              logo
                ? logo
                : "https://previews.123rf.com/images/doublerdesign/doublerdesign1911/doublerdesign191100109/133223058-simple-building-icon-logo-design-inspiration-vector-illustration-template.jpg"
            }
            alt={companyName}
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div>
                <Typography
                  component="div"
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    color: `${theme.palette.text.main}`,
                  }}>
                  {companyName}
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                style={{
                  color: `${theme.palette.text.main}`,
                  marginBottom: "2px",
                }}
                component="div">
                {title}
              </Typography>

              <Typography
                justifyContent="center"
                style={{
                  color: `${theme.palette.text.main}`,
                  fontStyle: "italic",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  top: "15px",
                }}>
                <Button
                  variant="outlined"
                  style={{
                    color: `${theme.palette.accent.main}`,
                    backgroundColor: `${
                      applied ? theme.palette.accent.secondary : ""
                    }`,
                  }}
                  onClick={() => {
                    handleApplyJob(user.username, id);
                    setApplied(true);
                  }}
                  disabled={applied}>
                  {applied ? "Applied" : "Apply"}
                </Button>
                {salary ? "$" + salary : ""}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Card>
    </Grid>
  );
}

export default JobCard;
