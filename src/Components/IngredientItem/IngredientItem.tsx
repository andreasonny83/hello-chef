import React, { useState, useEffect } from 'react';
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Ingredient } from '../../Types';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderColor: theme.palette.grey['300'],
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  primaryChecked: {
    textDecoration: 'line-through',
  },
}));

interface Props {
  ingredient: Ingredient;
  quantity: number;
}

export const IngredientItem: React.FC<Props> = ({ ingredient, quantity }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const { image, name, unit } = ingredient;

  useEffect(() => {
    setChecked(false);
  }, []);

  return (
    <ListItem button onClick={() => setChecked(!checked)}>
      <ListItemIcon>
        <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText
        classes={{ primary: checked ? classes.primaryChecked : undefined }}
        primary={name}
        secondary={`${quantity} ${unit || 'unit(s)'}`}
      />
      <ListItemAvatar>
        <Avatar src={image} className={classes.avatar} />
      </ListItemAvatar>
    </ListItem>
  );
};
