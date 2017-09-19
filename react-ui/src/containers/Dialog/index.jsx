import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Container, Card, Grid, Icon, Header, Image, Segment } from 'semantic-ui-react';

const Acard = () => (
  <Card as={Link} to="#">
    <Card.Content>
      <Card.Header>
        Main Menu Dialog
      </Card.Header>
      <Card.Meta>
        Lastest Update: 10/10/2017
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button color="red" floated="right" icon>
        <Icon name="trash" />
      </Button>
      <Button floated="right" basic color="green">Active</Button>
    </Card.Content>
  </Card>
);
const DialogList = () => {
  const a = 10;

  return (
    <Container>

      <Segment basic>
        <Header as="h2" >
          <Icon name="settings" />
          <Header.Content>
            Dialog Module
          </Header.Content>
          <Header.Subheader>
            Manage your account settings and set email preferences
          </Header.Subheader>
        </Header>
        <Card.Group>
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
        </Card.Group>
      </Segment>

    </Container>
  );
};

export default DialogList;
