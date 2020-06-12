import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import groceries from '../../icons/005-groceries.svg';

export const Home = () => {
  return (
    <Grid container>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Hello Chef
      </Typography>
      <img src={groceries} className="App-logo" alt="logo" />
    </Grid>
  );
};
