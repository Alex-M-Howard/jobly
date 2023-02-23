import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Company from "@/components/Company";

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
      <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
        <Company
          logo={company.logo}
          name={company.name}
          handle={company.handle}
          description={company.description}
          theme={theme}
          style={{ transition: "all .5s ease-in-out" }}
        />
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{p: 10}}
      justifyContent="center"
      alignItems="stretch"
      style={{
        backgroundColor: `${theme.palette.background.main}`,
      }}
    >
      {companyCards}
    </Grid>
  );
}

export default Companies;
