import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from './Pages/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Home />
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};
