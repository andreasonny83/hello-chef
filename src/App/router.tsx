import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';
import { Recipe } from '../Pages/Recipe';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes/:id" component={Recipe} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
