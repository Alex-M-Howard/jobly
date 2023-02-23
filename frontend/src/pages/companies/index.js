import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CompanyCard from "@/components/Company";

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
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        style={{
          padding: "10px",
          backgroundColor: `${theme.palette.background.main}`,
        }}>
        {companyCards}
      </Grid>
    
  );
}

export default Companies;
