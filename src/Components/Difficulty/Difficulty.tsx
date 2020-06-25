import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: '#eee',
    width: '28px',
    height: '22px',
    margin: '1px',
  },
}));

interface Props {
  level: number;
}

export const Difficulty: React.FC<Props> = ({ level }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: '#43a047' }}
        />
      </Grid>
      <Grid item>
        <Paper
          className={classes.paper}
          style={{ ...(level > 1 && { backgroundColor: '#ffd54f' }) }}
        />
      </Grid>
      <Grid item>
        <Paper
          className={classes.paper}
          style={{ ...(level > 2 && { backgroundColor: '#bf360c' }) }}
        />
      </Grid>
    </Grid>
  );
};
