import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    padding: theme.spacing(0, 2),
  },
}));

interface Props {
  position: number;
  image: string;
  description: string;
}

export const CookingStep: React.FC<Props> = ({
  position,
  image,
  description,
}) => {
  const classes = useStyles();

  return (
    <ListItem divider>
      <ListItemAvatar classes={{ root: classes.image }}>
        <img src={image} alt={`step ${position}`} />
      </ListItemAvatar>
      <ListItemAvatar>
        <Avatar>{position}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={description} />
    </ListItem>
  );
};
