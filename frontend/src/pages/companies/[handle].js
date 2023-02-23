import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import JoblyApi from "@/API";
import { CircularProgress, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CompanyInfoCard from "@/components/CompanyInfoCard";

function CompanyInfo() {
  const [company, setCompany] = useState()
  const router = useRouter();
  const theme = useTheme();
  const companyHandle = router.query.handle;

  useEffect(function fetchWhenMounted() {
    async function fetchData() {
      let data = await JoblyApi.getCompany(companyHandle);
      setCompany(data)
    }

    fetchData();
    
  }, [companyHandle]);
  
  if (!company) {
      return (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{  }}>
          <Grid item>
            <CircularProgress
              size={70}
              style={{ color: `${theme.palette.secondary.main}` }}
            />
          </Grid>
        </Grid>
      );
    }
      
    return (
        <CompanyInfoCard 
        name={company.name} 
        description={company.description} 
        numEmployees={company.numEmployees} 
        jobs={company.jobs}
        theme={theme}
        />
      );
  }

export default CompanyInfo;
