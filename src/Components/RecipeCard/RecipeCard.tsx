import React, { useState, useCallback } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
  Hidden,
  CardActions,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    wordBreak: 'break-word',
    lineClamp: 2,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxOrient: 'vertical',
    display: '-webkit-box',
    height: '60px',
  },
  caption: {
    wordBreak: 'break-word',
    lineClamp: 3,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxOrient: 'vertical',
    display: '-webkit-box',
  },
  cardContent: {
    height: '160px',
  },
}));

interface Props {
  post: any;
}

export const RecipeCard: React.FC<Props> = ({ post }) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(1);

  const onMouseEnter = useCallback(() => {
    setElevation(8);
  }, []);

  const onMouseLeave = useCallback(() => {
    setElevation(1);
  }, []);

  return (
    <Grid item xs={12} md={4}>
      <Card
        raised
        elevation={elevation}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <CardActionArea component="a" href={post.link}>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.title}
            />
          </Hidden>
          <CardContent className={classes.cardContent}>
            <Typography component="h4" variant="h6" className={classes.title}>
              {post.title}
            </Typography>
            <Typography variant="caption" className={classes.caption} paragraph>
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
