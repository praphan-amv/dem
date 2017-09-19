import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

const main = {
  top: '0px',
  bottom: '0px',
  left: '0px',
};
const fullHeight = {
  height: '100%',
};

const EmptyLayout = props => (
  <div style={fullHeight}>
    <div className="main" style={main}>
      <main>
        {props.children}
      </main>
    </div>
  </div>
);

export { EmptyLayout };
export default EmptyLayout;
