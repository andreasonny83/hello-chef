import React from 'react';
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
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Difficulty } from '../../Components';

const ingredients = [
  {
    id: 'i001',
    name: `Portobello Mushroom`,
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55683504f8b25e723e8b4569.png',
    unit: 'unit(s)',
  },
  {
    id: 'i002',
    name: `Goat's Cheese`,
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55686488f8b25e5a408b4569.png',
    unit: 'grams',
  },
  {
    id: 'i003',
    name: `Red Onion`,
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/554a6fb4fd2cb95a598b456e.png',
    unit: 'unit(s)',
  },
  {
    id: 'i004',
    name: `Balsamic Vinegar`,
    image: '',
    unit: 'ml',
  },
  {
    id: 'i005',
    name: `Potato`,
    image: '',
    unit: 'unit(s)',
  },
  {
    id: 'i006',
    name: `Ciabatta Bread`,
    image: '',
    unit: 'unit(s)',
  },
  {
    id: 'i007',
    name: `Baby Leaves`,
    image: '',
    unit: 'grams',
  },
];

const recipe = {
  title: `Mushroom and Goat's Cheese Burger`,
  description: 'With Balsamic Caramelised Onion, Baby Leaves and Wedges',
  image:
    'https://res.cloudinary.com/hellofresh/image/upload/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/v1/hellofresh_s3/image/5eb43c9afbcfda646c2eb012-cf0e9138.jpg',
  preparationTime: '35 minutes',
  difficulty: 2,
  ingredients: ['i001', 'i002', 'i003', 'i004', 'i005', 'i006', 'i007'],
  ingredientsPerServing: [
    { item: 'i001', quantity: 1 },
    { item: 'i002', quantity: 20 },
    { item: 'i003', quantity: 0.5 },
    { item: 'i004', quantity: 5 },
    { item: 'i005', quantity: 2 },
    { item: 'i006', quantity: 1 },
    { item: 'i007', quantity: 70 },
  ],
};

export const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    padding: theme.spacing(30, 0, 0),
    backgroundImage: `url(${recipe.image})`,
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
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderColor: theme.palette.grey['300'],
    borderWidth: '1px',
    borderStyle: 'solid',
  },
}));

export const Recipe = () => {
  const classes = useStyles();
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
            {recipe.title}
          </Typography>
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
            {recipe.description}
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
                {recipe.preparationTime}
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
              <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
              >
                <Difficulty level={recipe.difficulty} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="sm">
        <Card>
          <CardHeader title="Ingredients"></CardHeader>
          <CardContent>
            <List>
              {ingredients.map((ingredient) => (
                <ListItem key={ingredient.id} button>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={false}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={ingredient.name}
                    secondary={ingredient.unit}
                  />
                  <ListItemAvatar>
                    <Avatar src={ingredient.image} className={classes.avatar} />
                  </ListItemAvatar>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
