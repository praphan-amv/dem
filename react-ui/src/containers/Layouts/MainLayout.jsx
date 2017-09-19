import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const Spacer = styled.span`flex-grow: 1;`;

const divStyle = {
  position: 'fixed',
  top: '0px',
  bottom: '0px',
  left: '0px',
};

const main = {
  marginLeft: '100px',
  minWidth: '550px',
};
const fullHeight = {
  height: '100%',
};

const sidebarStyle = {
  backgroundColor: '#21519E',
};

const MainLayout = props => (
  <div style={fullHeight}>
    <div className="toc" style={divStyle}>
      <Sidebar as={Menu} visible icon="labeled" inverted vertical style={sidebarStyle} >
        <Menu.Item as={Link} name="home" to="/" >
          <Icon name="dashboard" />
              Dashboard
        </Menu.Item>
        <Menu.Item name="gamepad" as={Link} to="/about-us">
          <Icon name="gamepad" />
                Test
        </Menu.Item>
        <Menu.Item name="table" as={Link} to="/table">
          <Icon name="table" />
              Table
        </Menu.Item>

        <Menu.Item name="table" as={Link} to="/dialog">
          <Icon name="comments outline" />
              Dialog
        </Menu.Item>
        <Menu.Item name="json" as={Link} to="/jsondialog">
          <Icon name="comments outline" />
              JSON
        </Menu.Item>

        <Menu.Item name="table" as={Link} to="/domodi">
          <Icon name="comments outline" />
              Dialog
        </Menu.Item>

        <Spacer />
        <Menu.Item name="table" as={Link} to="/login">
          <Icon name="user" />
              Login
        </Menu.Item>
      </Sidebar>
    </div>
    <div className="main" style={main}>
      <main>
        {props.children}
      </main>
    </div>
  </div>);

export { MainLayout };
export default MainLayout;
