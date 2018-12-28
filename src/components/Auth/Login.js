import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

class Login extends React.Component{
    state = {
        email: '',
        password: '',
        errors: [],
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    displayErrors = (errors) => {
        return errors.map((error, i) => {
            return <div key={i}>
                <p>{error.message}</p>
            </div>
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.isFormValid(this.state)){
            this.setState({errors: [], loading: true})
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser);
                })
                .catch(error => {
                    console.error(error)
                    this.setState({errors: this.state.errors.concat(error), loading: false})
                })
        }
    }

    isFormValid = ({email, password}) => email && password

    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : ''
    }

    render(){
        const { email, password, errors, loading} = this.state;

        return (
            <div>
                <Grid textAlign='center' verticalAlign='middle' className='app'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h1' icon color='violet' textAlign='center'>
                            <Icon name='code branch' color='violet'/>
                            Login to DevChat
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment>
                                <Form.Input fluid name='email' icon='mail' iconPosition='left' placeholder='Email Address' onChange={this.handleChange} type='email' value={email} className={this.handleInputError(errors, 'email')} />

                                <Form.Input fluid name='password' icon='lock' iconPosition='left' placeholder='Password ' onChange={this.handleChange} type='password' value={password} className={this.handleInputError(errors, 'password')}/>

                                <Button disabled={loading} className={loading ? 'loading' : ''} color='violet' fluid size='large'>Submit</Button>
                            </Segment>
                        </Form>
                        {errors.length > 0 && 
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>}
                        <Message>Don't have an account? <Link to='/register'>Register</Link></Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Login;