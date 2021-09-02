import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import bank from './bank.png';
import UserContext from '../UserContext';

function Home() {

  const context = useContext(UserContext);

  let message;

  // Handle if user is not logged in
  if (context.loggedInUser === null) {
    message = (
      <div class="alert alert-danger" role="alert">
         You are not logged ! Please login or create account
         <br></br>
         <br></br>
         <div class="d-grid gap-2 d-md-block">
         <a class="btn btn-primary  gap-2 d-md-block"  href="/#/login" role="button">Login</a>
         <br></br>
         <a class="btn btn-primary  gap-2 d-md-block" href="/#/create-account" role="button">Create Account</a>
         </div>
      </div>
    );
  } 
  
  // Handle if user is logged in
  else {

    // Get a reference to the logged in user
    let user;
    for (const eachUser of context.users) {
      if (eachUser.username === context.loggedInUser) {
        user = eachUser;
      }
    }

    // Update the message with the user's information
    message = (
      <div class="alert alert-dark" role="alert">
        Welcome back, {user.username} !
        <br/>
        <br></br>
        Your balance is: ${user.balance}
        </div>
    );   
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
        <Card.Header>BadBank</Card.Header>
        <Card.Body>
          <Card.Title>WELCOME TO BAD BANK </Card.Title>
          <Card.Text>
          {message}
          </Card.Text>
          <Image src={bank} fluid />
        </Card.Body>
      </Card>
    ))
    
);
};


export default Home;