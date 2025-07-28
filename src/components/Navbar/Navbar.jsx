import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Navbar.css'
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "rgb(252, 200, 124) !important", position: 'fixed', zIndex: '100', width: "100%" }}>
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100 py-1">
            <Navbar.Brand href="#" className='logo'>TransGo Senegal</Navbar.Brand>
            <Form className="d-flex">
            <Button className='connecte'>Se Connecter</Button>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;