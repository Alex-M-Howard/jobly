import { useContext } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { UserContext } from "@/context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Jobly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        style={{ backgroundColor: "#FFF", height: "100vh" }}>
        {user.username
         ? <Typography variant="h5" style={{color: "#000"}}>Welcome back, {user.username}!</Typography>
         : null}

        <Image
          src="/main-pic.jpg"
          alt="Main Picture"
          width={1601}
          height={800}
          layout="responsive"
          style={{ maxHeight: "80vh", maxWidth: "80vw" }}
        />
      </Grid>
    </>
  );
}
