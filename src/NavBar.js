import * as Bootstrap from 'react-bootstrap';
import './index.css';

function NavBar() {
  return (
    <Bootstrap.Navbar bg="dark" variant="dark">
      <div className="container-fluid">
        <Bootstrap.Navbar.Brand href="/#">BADBANK</Bootstrap.Navbar.Brand>
        <Bootstrap.Nav className="me-auto">
          <Bootstrap.Nav.Link href='/#'>Home</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/create-account'>Create Account</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/login'>Login</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/deposit'>Deposit</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/withdraw'>Withdraw</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/all-data'>All Data</Bootstrap.Nav.Link>
        </Bootstrap.Nav>
      </div>
    </Bootstrap.Navbar>

  );
}

export default NavBar;