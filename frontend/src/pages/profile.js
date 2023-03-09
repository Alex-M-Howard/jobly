import React, { useState, useContext } from "react";
import Form from "@/components/Form";
import { Grid, Alert, AlertTitle, Typography } from "@mui/material";
import { UserContext } from "@/context/UserContext";
import JoblyApi from "@/API";

function Profile() {
  const [error, setError] = useState(null); 
  const [alertShowing, setAlertToggle] = useState(false);
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  const fields = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "email", label: "Email" },
  ];

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  const handleSubmit = async (formData) => {
    if (error) setError(null);

    let res = await JoblyApi.updateUser(user.username, formData);

    if (res.error) {
      setError(res.error);
    } else {
      setAlertToggle(true);
      setTimeout(() => {
        setAlertToggle(false);
      }, 3500);
    }
  };



  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Alert
        sx={{ m: 2, minWidth: "350px", maxWidth: "350px", opacity: `${alertShowing ? '1' : '0'}`, transition: 'opacity 0.5s ease-in-out'}}
        severity="success">
        <AlertTitle>Success</AlertTitle>
        Changes saved
      </Alert>
      {error !== null ? (
        <Alert
          sx={{ m: 2, minWidth: "350px", maxWidth: "350px" }}
          severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : null}
      <Typography align="center" variant="h3" sx={{ mt: 5 }}>
        {`${user.username}'s`} Profile
      </Typography>

      <Form
        fields={fields}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        buttonText="Save"
      />
    </Grid>
  );
}


export default Profile;
