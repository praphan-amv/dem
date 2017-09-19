import React from 'react';
import { Container, Grid, Form, Icon, Segment, Button, Header } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from '../../components/Form/dialog';
import { InputFormField } from '../../components/Form/semantic_form';


const centerGrid = {
  height: '100%',
  position: 'absolute',
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  margin: '0px',
  backgroundColor: '#DADADA',

};

const styleColumn = {
  maxWidth: '450px',
};

const rotate360 = keyframes `
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

// Here we create a component that will rotate everything we pass in over two
// seconds const Rotate = styled.div ` 	display: inline-block; 	animation:
// ${rotate360} 1s linear infinite; 	padding: 2rem 1rem; 	font-size: 1.2rem; `;

const Login = () =>
  // document.body.style.backgroundColor = 'green';
  // <Container as={Grid} verticalAlign="middle">
  //   <div className="ui icon warning message" />
  // </Container>
  (
    <Grid verticalAlign="middle" textAlign="center" style={centerGrid} >
      <Grid.Column style={styleColumn}>
        <Header>
          <Icon name="sign in" />
          Login to Dialog
        </Header>
        <Form>
          <Segment>
            <Field name="username" iconPosition="left" icon="user" component={InputFormField} placeholder="User name" />
            <Field name="password" iconPosition="left" icon="lock" type="password" component={InputFormField} placeholder="Password" />
            <Button name="Submit" fluid color="blue" >
                Login
            </Button>
          </Segment>

        </Form>
      </Grid.Column>
    </Grid>
  )
 ;
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',

})(Login));
