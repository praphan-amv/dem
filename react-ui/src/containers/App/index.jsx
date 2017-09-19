import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import { MainLayout, EmptyLayout } from '../Layouts';
import Login from '../Login';
import TableDemo from '../Demo/table';
import DialogDemo from '../Demo/dialog';
import DialogJsonDemo from '../Demo/jsondialog';
import DialogList from '../Dialog';


const divStyle = {
  position: 'fixed',
  top: '0px',
  bottom: '0px',
  left: '0px',
};

const fullHeight = {
  height: '100%',
};


const App = () => (
  <div>

    <Route exact path="/" render={() => (<MainLayout><TableDemo /></MainLayout>)} />
    <Route path="/about-us" render={() => (<MainLayout><Login /></MainLayout>)} />
    <Route path="/table" render={() => (<MainLayout><TableDemo /></MainLayout>)} />
    <Route path="/dialog" render={() => (<MainLayout><DialogList /></MainLayout>)} />
    <Route path="/jsondialog" render={() => (<MainLayout><DialogJsonDemo /></MainLayout>)} />
    <Route path="/domodi" render={() => (<MainLayout><DialogDemo /></MainLayout>)} />
    <Route path="/login" render={() => (<EmptyLayout><Login /></EmptyLayout>)} />


  </div>
);

export default App;
