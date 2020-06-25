import React, { memo } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { LIST_RECIPES } from '../../graphql';
import { HomeComponent } from './HomeComponent';
import { Recipe } from '../../Types';

export const Home = memo(() => {
  const { data, loading, error } = useQuery<{
    listRecipes: { items: Recipe[] };
  }>(LIST_RECIPES);

  if (loading) {
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error || !data || !data.listRecipes?.items) {
    return (
      <Box>
        <Typography>Something went wrong</Typography>
      </Box>
    );
  }

  const recipes = data.listRecipes?.items || [];

  return <HomeComponent recipes={recipes} />;
});
