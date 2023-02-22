import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function CompanyCard({logo, name, description, theme}){
    return (
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card variant="outlined" sx={{ maxWidth: 425 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              logo
                ? logo
                : "https://previews.123rf.com/images/doublerdesign/doublerdesign1911/doublerdesign191100109/133223058-simple-building-icon-logo-design-inspiration-vector-illustration-template.jpg"
            }
            title={name}
          />
          <CardContent
            style={{ backgroundColor: `${theme.palette.secondary.main}` }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }




export default CompanyCard;
