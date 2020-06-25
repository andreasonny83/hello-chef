import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';
import { RecipePage } from '../Pages/Recipe';

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes/:recipeId" component={RecipePage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
});
