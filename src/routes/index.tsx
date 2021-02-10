import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhe from '../pages/Detalhe';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalhe/:id" component={Detalhe} />
    </Switch>
)

export default Routes;