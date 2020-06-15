import React from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  Button,
  Typography,
  Link as LinkUI,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  { title: 'Home', url: '/' },
  { title: 'How it works', url: '/how-it-works' },
  { title: 'Recipes', url: '/recipes' },
  { title: 'Ingredients', url: '/ingredients' },
  { title: 'Week Planner', url: '/week-plan' },
  { title: 'Use my ingredients', url: '/my-ingredients' },
];

export const Header = () => {
  const classes = useStyles();
  return (
    <Box>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Register</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Hello Chef
        </Typography>
        <Button variant="outlined" color="primary" size="small">
          Sign In
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <LinkUI
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            component={Link}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </LinkUI>
        ))}
      </Toolbar>
    </Box>
  );
};
