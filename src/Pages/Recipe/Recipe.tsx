import React, { memo, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { RecipeComponent } from './RecipeComponent';
import { GET_RECIPE } from '../../graphql';
import { Recipe } from '../../Types';

export const RecipePage: React.FC = memo(() => {
  const { recipeId } = useParams();
  const [recipeSize, setRecipeSize] = useState(0);
  const { data, loading, error } = useQuery<{ getRecipe: Recipe }>(GET_RECIPE, {
    variables: {
      id: recipeId || '',
    },
    fetchPolicy: 'no-cache',
  });

  const handleSizeChange = useCallback((size: number) => {
    setRecipeSize(size);
  }, []);

  if (loading) {
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error || !data || !data.getRecipe || !data.getRecipe.id) {
    return (
      <Box>
        <Typography>Something went wrong</Typography>
      </Box>
    );
  }

  const {
    title,
    description,
    image,
    preparationTime,
    difficulty,
    size,
    ingredients,
    quantities,
    steps,
  } = data.getRecipe;

  return (
    <RecipeComponent
      recipeSize={recipeSize}
      title={title}
      description={description}
      image={image}
      difficulty={difficulty}
      preparationTime={preparationTime}
      size={size}
      ingredients={ingredients.items}
      quantities={quantities}
      steps={steps}
      onRecipeSize={handleSizeChange}
    />
  );
});
