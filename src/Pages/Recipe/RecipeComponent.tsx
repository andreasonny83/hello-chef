import React, { memo, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Grid,
  Container,
  Divider,
  Card,
  CardHeader,
  CardContent,
  List,
} from '@material-ui/core';
import {
  Difficulty,
  RecipeSize,
  IngredientItem,
  CookingStep,
} from '../../Components';
import {
  RecipeIngredientItem,
  IngredientQuantity,
  RecipeStep,
} from '../../Types';

interface Props {
  title: string;
  description: string;
  preparationTime: string;
  image: string;
  recipeSize: number;
  difficulty: number;
  size: number;
  quantities: IngredientQuantity[];
  ingredients: RecipeIngredientItem[];
  steps: RecipeStep[];
  onRecipeSize: (size: number) => void;
}

const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    padding: theme.spacing(30, 0, 0),
    backgroundImage: (props: any) => `url(${props?.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
  },
  heroContent: {
    marginTop: theme.spacing(-6),
    marginBottom: theme.spacing(6),
    zIndex: 10,
    background: theme.palette.background.paper,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.grey['300'],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4, 6),
    position: 'relative',
  },
  stepsContent: {
    margin: theme.spacing(6),
  },
}));

export const RecipeComponent: React.FC<Props> = memo(
  ({
    recipeSize,
    title,
    description,
    image,
    ingredients,
    quantities,
    difficulty,
    size,
    preparationTime,
    steps,
    onRecipeSize,
  }) => {
    const classes = useStyles({ image });

    useEffect(() => {
      onRecipeSize(size);
    }, [onRecipeSize, size]);

    const getQuantity = useCallback(
      (id: string) => {
        const ingredientQuantityPerSize = quantities.find(
          (quantity) => quantity.id === id
        )?.quantity;

        if (!ingredientQuantityPerSize) {
          return 1;
        }

        return (ingredientQuantityPerSize * recipeSize) / size;
      },
      [quantities, recipeSize, size]
    );

    return (
      <Box>
        <div className={classes.heroWrapper}></div>
        <Container maxWidth="md" className={classes.heroContent}>
          <Box marginBottom={4}>
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              {description}
            </Typography>
          </Box>

          <Divider />

          <Box marginTop={4}>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Typography
                  variant="h5"
                  align="right"
                  color="textPrimary"
                  paragraph
                >
                  Preparation Time
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography
                  variant="h5"
                  align="left"
                  color="textSecondary"
                  paragraph
                >
                  {preparationTime}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Typography
                  variant="h5"
                  align="right"
                  color="textPrimary"
                  paragraph
                >
                  Difficulty
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Difficulty level={Number(difficulty)} />
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Card elevation={2}>
            <CardHeader title="Ingredients"></CardHeader>
            <CardContent>
              <RecipeSize size={recipeSize} onSizeChage={onRecipeSize} />
              <List>
                {ingredients.map((ingredient) => (
                  <IngredientItem
                    key={ingredient.item.id}
                    ingredient={ingredient.item}
                    quantity={getQuantity(ingredient.item.id)}
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </Container>

        <Container maxWidth="lg" className={classes.stepsContent}>
          <Card elevation={2}>
            <CardHeader title="Cooking Steps"></CardHeader>
            <CardContent>
              <List>
                {steps.map((step) => (
                  <CookingStep
                    key={step.position}
                    position={step.position}
                    image={step.image}
                    description={step.description}
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }
);
