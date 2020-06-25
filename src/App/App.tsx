import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from './router';
import { Footer } from './Footer';
import { Header } from './Header';

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
}));

export const App = memo(() => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Header />
          <Container component="main" className={classes.main}>
            <Router />
          </Container>
        </BrowserRouter>
      </Container>
      <Footer />
    </Box>
  );
});
