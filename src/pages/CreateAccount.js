import { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Card } from 'react-bootstrap';
import UserContext from '../UserContext.js';

function CreateAccount() {

  const context = useContext(UserContext);

  const formikProps = {
    initialValues: {
      username: '',
      email:'',
      password: ''
    },
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      context.users.push({
        username: values.username,
        email: values.email,
        password: values.password,
        balance: 0
      });
      resetForm();
      alert(`Account created with username: ${values.username}`);
      console.log({values})
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
        <Card.Header>Create Account</Card.Header>
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
            <label htmlFor='email'>Email</label>
            <Field className='form-control' type='email' id='email' name='email' placeholder='enter your email' />
            <ErrorMessage className='error' name='email' component='div' />
          </div>
          <br></br>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field className='form-control' id='password' name='password' placeholder='enter your password' type='password' />
            <ErrorMessage className='error' name='password' component='div' />
          </div>
          
          <br/>
          <button type='submit' className='btn btn-primary'>Create Account</button>
        </Form>
      </Formik>
        </Card.Body>
      </Card>
    ))
  );
}

export default CreateAccount;