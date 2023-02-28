import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CompanyCard from "@/components/Company";
import Search from "@/components/Search"; 

function Companies() {
  const theme = useTheme();
  const [companies, setCompanies] = useState([]);

  useEffect(function fetchWhenMounted() {
    async function fetchData() {
      let data = await JoblyApi.getCompanies();
      setCompanies(data);
    }

    fetchData();
  }, []);

  const companyCards = companies.map((company) => {
    return (
        <CompanyCard
          logo={company.logo}
          name={company.name}
          handle={company.handle}
          description={company.description}
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
      style={{
        backgroundColor: `${theme.palette.background.main}`,
      }}>
      <Grid item>
        <Search item="companies" />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{ m: '5px auto' }}>
        {companyCards}
      </Grid>
    </Grid>
  );
}

export default Companies;
