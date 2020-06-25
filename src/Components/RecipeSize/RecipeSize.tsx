import React, { useCallback } from 'react';
import { ButtonGroup, Button, Grid, Typography } from '@material-ui/core';

interface Props {
  size: number;
  onSizeChage: (size: number) => void;
}

export const RecipeSize: React.FC<Props> = ({ size, onSizeChage }) => {
  const handleSizeChage = useCallback(
    (newSize: number) => () => {
      onSizeChage(newSize);
    },
    [onSizeChage]
  );

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography>Number of people</Typography>
      </Grid>
      <Grid item>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant={size === 1 ? 'contained' : 'outlined'}
            onClick={handleSizeChage(1)}
          >
            1
          </Button>
          <Button
            variant={size === 2 ? 'contained' : 'outlined'}
            onClick={handleSizeChage(2)}
          >
            2
          </Button>
          <Button
            variant={size === 3 ? 'contained' : 'outlined'}
            onClick={handleSizeChage(3)}
          >
            3
          </Button>
          <Button
            variant={size === 4 ? 'contained' : 'outlined'}
            onClick={handleSizeChage(4)}
          >
            4
          </Button>
          <Button
            variant={size === 5 ? 'contained' : 'outlined'}
            onClick={handleSizeChage(5)}
          >
            5
          </Button>
          <Button
            variant={size === 6 ? 'contained' : 'outlined'}
            onClick={handleSizeChage(6)}
          >
            6
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
