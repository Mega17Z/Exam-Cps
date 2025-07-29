// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import './Navbar.css'
// // import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//   const navigate = useNavigate()

//   return (
//     <Navbar expand="lg" style={{ backgroundColor: "rgb(252, 200, 124) !important", position: 'fixed', zIndex: '100', width: "100%" }}>
//       <Container fluid>
//         <div className="d-flex justify-content-between align-items-center w-100 py-1">
//             <Navbar.Brand href="#" className='logo'>TransGo Senegal</Navbar.Brand>
//             <Form className="d-flex">
//             <Button className='connecte' onClick={() => {
//               navigate('/connexion')
//             }}>Se Connecter</Button>
//           </Form>
//         </div>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;



import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'
import { FaUserCircle, FaTicketAlt } from 'react-icons/fa';
import { useAuth } from '../Context/AuthentificationContext';

function NavScrollExample() {
  const navigate = useNavigate();
  const { utilisateur } = useAuth();

  return (
    <Navbar expand="lg" style={{ backgroundColor: "whitesmoke", position: 'fixed', zIndex: '100', width: "100%", boxShadow: "0 0 10px #0000007c" }}>
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100 py-1">
          <Navbar.Brand href="/" className='logo'>TransGo Senegal</Navbar.Brand>

          {!utilisateur ? (
            <Form className="d-flex">
              <Button className='connecte' onClick={() => navigate('/connexion')}>
                Se Connecter
              </Button>
            </Form>
          ) : (
            <div className="d-flex align-items-center gap-4">

              <div className="d-flex align-items-center flex-column">
                <FaTicketAlt style={{ fontSize: "24px", cursor: "pointer" }} />
                <span className="ms-2" style={{ fontSize: "10px" }}>Mes Reservations</span>
              </div>
              <div className="d-flex align-items-center flex-column" style={{ cursor: "pointer" }}>
                <FaUserCircle style={{ fontSize: "24px" }} />
                <span className="ms-2" style={{ fontSize: "10px" }}>{utilisateur.email}</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
