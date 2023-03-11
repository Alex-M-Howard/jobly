import React, { useState, useEffect } from "react";
import JoblyApi from "@/API";
import { useTheme } from "@mui/material/styles";
import uuid4 from "uuid4";

// Import Components
import { Grid } from "@mui/material";
import CompanyCard from "@/components/Company";
import Search from "@/components/Search"; 
import Loading from "@/components/Loading";

function Companies() {
  const theme = useTheme();
  const [companies, setCompanies] = useState(null);

  useEffect(function fetchWhenMounted() {
    async function fetchData() {
      let data = await JoblyApi.getCompanies();
      setCompanies(data);
    }

    fetchData();
  }, []);

  if (companies === null) {
    return <Loading theme={theme} />
  }

  const search = async (qString) => {
    if (!qString) {
      let data = await JoblyApi.getCompanies();
      setCompanies(data);
    } else {
      let data = await JoblyApi.searchCompanies(qString);
      setCompanies(data);
    }
  }

  const companyCards = companies.map((company) => {
    return (
        <CompanyCard
          logo={company.logo}
          name={company.name}
          handle={company.handle}
          description={company.description}
          theme={theme}
          key={uuid4()}
        />
    );
  });

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Search item="companies" search={search}  />
      </Grid>
      {companies.length > 0 ? companyCards : "No matching companies found..."}
    </Grid>
  );
}

export default Companies;
