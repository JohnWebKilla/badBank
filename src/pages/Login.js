import { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Card } from 'react-bootstrap';
import UserContext from '../UserContext.js';

function checkLogin(username, password, users) {

  for (const user of users) {
    if (
      user.username === username &&
      user.password === password
    ) {
      return true;
    }
  }
  return false;
 
}



function Login() {

  const context = useContext(UserContext);

  const formikProps = {
    initialValues: {
      username: '',
      password: ''
    },
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      const isLoginValid = checkLogin(
        values.username,
        values.password,
        context.users
      );
      if (!isLoginValid) {
        errors.login = 'Invalid login';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      // eslint-disable-next-line
      if (context.loggedInUser = values.username){
        resetForm();
        alert(`Welcome back, ${values.username}!`);
      } else {
        alert('Login or Password you entered is wrong');
      }
    }
  };
  

  return (
    [
      'Dark'
    ].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '50rem', marginTop:'1rem', marginLeft:'1rem'  }}
        className="mb-2"
      >
        <Card.Header>Login</Card.Header>
        <Card.Body>
        <Formik {...formikProps}>
        <Form>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <Field className='form-control' id='username' name='username' placeholder='enter your usename' />
            <ErrorMessage className='error' name='username' component='div' />
          </div>
          <br></br>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field className='form-control' id='password' name='password' placeholder='enter your password' type='password' />
            <ErrorMessage className='error' name='password' component='div' />
          </div>
          
          <br/>
          <button type='submit' className='btn btn-primary'>Login</button>
        </Form>
      </Formik>
        </Card.Body>
      </Card>
    ))
  );
}

export default Login;