import { useContext } from 'react';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Card } from 'react-bootstrap';
import UserContext from '../UserContext.js';


function Deposit() {

  const context = useContext(UserContext);
 


  // Here we will let the user know when they login
  if (context.loggedInUser === null) {
    return (
      <div class="alert alert-danger" role="alert">
         You are not logged ! Please login or create account
         <br></br>
         <br></br>
         <div class="d-grid gap-2 d-md-block">
         <a class="btn btn-primary gap-2 "  href="/#/login" role="button">Login</a>
         <br></br>
         <br></br>
         <a class="btn btn-primary gap-2 " href="/#/create-account" role="button">Create Account</a>
         </div>
      </div>
    );
  }

  // Get the logged user context
  let user;
  for (const eachUser of context.users) {
    if (eachUser.username === context.loggedInUser) {
      user = eachUser;
    }
  }

  // Formik 
  const formikProps = {
    initialValues: {
      amount: 0
    },
    onSubmit: (values, { resetForm }) => {

      // Here we gonna update the user balance
       for (let i = 0; i < context.users.length; i++) {
        const eachUser = context.users[i];
        if (eachUser.username === context.loggedInUser) {
         context.users[i].balance += Number(values.amount);
        }
      }

      resetForm();
      alert('Amount Deposit!');

    }
  }

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
        <Card.Header>Deposit</Card.Header>
        <Card.Body>
        Avilable Balance: ${user.balance}
        <br></br>
        <br></br>
        <Formik {...formikProps}>
        <Form>
          <div className='form-group'>
            <label htmlFor='amount'>Amount</label>
            <Field 
            type='number' 
            className='form-control' 
            id='amount' 
            name='amount' 
            placeholder='please enter your amount'
             />
            <ErrorMessage className='error' name='amount' component='div' />
          </div>

          <br/>
          <button type='submit' className='btn btn-primary'>Deposit</button>
        </Form>

      </Formik>
        </Card.Body>
      </Card>
    ))
  );
}

export default Deposit;