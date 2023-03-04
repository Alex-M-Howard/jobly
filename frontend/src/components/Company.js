import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Link from "next/link";

function CompanyCard({logo, name, handle, description, theme}){
    return (
      <Grid item xs={12} sm={8} md={6} lg={4} sx={{m: 1}}>
        <Link
          href={`/companies/${handle}`}
          style={{ textDecoration: "none"}}
          >
          <Card variant="outlined" sx={{ maxWidth: 425, m: '5px auto', minWidth: 400 }}>
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
              style={{
                backgroundColor: `${theme.palette.secondary.main}`,
                color: `${theme.palette.text.main}`,
              }}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography>{description}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
}
  
export default CompanyCard;
