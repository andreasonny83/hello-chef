import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Copyright = () => (
  <Typography
    variant="subtitle1"
    align="center"
    color="textSecondary"
    component="p"
  >
    {'Copyright © '}
    <Link color="inherit" href="https://hellochef.com/">
      Hello Chef
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center" gutterBottom>
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
