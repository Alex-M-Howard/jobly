import React, {useState, useEffect} from "react";
import JoblyApi from "@/API";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Companies() {
  const theme = useTheme();
  const [companies, setCompanies] = useState([]);
  console.log(theme.palette);
  useEffect(function fetchWhenMounted() {
    async function fetchData() {
      let data = await JoblyApi.getCompanies();
      setCompanies(data);
    }
    
    fetchData();

  }, [])


  const companyCards = companies.map(company => {
    return (
      <Grid item xs={12} sm={8} md={4} lg={3}>
        <Card variant="outlined" sx={{ maxWidth: 425 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              company.logo
                ? company.logo
                : "https://previews.123rf.com/images/doublerdesign/doublerdesign1911/doublerdesign191100109/133223058-simple-building-icon-logo-design-inspiration-vector-illustration-template.jpg"
            }
            title={company.name}
          />
          <CardContent
            style={{ backgroundColor: `${theme.palette.primary.main}` }}>
            <Typography gutterBottom variant="h5" component="div">
              {company.name}
            </Typography>
            <Typography>{company.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  })


  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='stretch'
        style={{marginTop: '5px', padding: '5px'}}
        
      >
        {companyCards}
      </Grid>
    </div>
  );
}

export default Companies;
