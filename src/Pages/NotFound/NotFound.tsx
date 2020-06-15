import React from 'react';
import { Typography, Grid, Link as UILink } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Grid container direction="column">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Page not Found
      </Typography>
      <Typography align="center">
        <UILink component={Link} to="/">
          Go to homepage
        </UILink>
      </Typography>
    </Grid>
  );
};
