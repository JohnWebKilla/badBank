import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import UserContext from '../UserContext.js';

function AllData() {

        const context = useContext(UserContext);

        const userList = [];
      for (let i = 0; i < context.users.length; i++) {
        let username = context.users[i].username;
        let email = context.users[i].email;
        let password = context.users[i].password;
        let balance = context.users[i].balance;
        userList.push(<tr><td>{username}</td><td>{email}</td> <td>{password}</td>
        <td>${balance}</td></tr>);
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
        <Card.Header>All Data</Card.Header>
        <Card.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>

            </tr>
          </thead>
          <tbody>
          {userList}
          </tbody>
        </Table>
        </Card.Body>
      </Card>
    ))
  );
}

export default AllData;