import React, { memo } from 'react';
import {
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
  Grid,
} from '@material-ui/core';
import groceries from '../../icons/005-groceries.svg';
import { makeStyles } from '@material-ui/core/styles';
import { RecipeCard } from '../../Components/RecipeCard';
import { Recipe } from '../../Types';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    display: 'flex',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.black,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(/images/unsplash.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-60px -14px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    padding: theme.spacing(1, 2),
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  media: {
    display: 'flex',
    padding: theme.spacing(1, 2),
    background: theme.palette.grey[200],
  },
}));

interface Props {
  recipes: Recipe[];
}

export const HomeComponent: React.FC<Props> = memo(({ recipes }) => {
  const classes = useStyles();

  return (
    <Box>
      <Card className={classes.mainFeaturedPost}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
            >
              Hello Chef
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              description
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.media}
          title="Live from space album cover"
        >
          <img src={groceries} className={classes.cover} alt="logo" />
        </CardMedia>
      </Card>

      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Grid>
    </Box>
  );
});
