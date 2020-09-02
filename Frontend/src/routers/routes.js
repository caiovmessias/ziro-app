import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListaProdutos from '../pages/ListaProdutos';
import Carrinho from '../pages/Carrinho';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/" component={ListaProdutos} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;