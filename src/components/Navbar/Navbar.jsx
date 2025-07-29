import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'
import { FaUserCircle, FaTicketAlt } from 'react-icons/fa';
import { useAuth } from '../Context/AuthentificationContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useState } from 'react';

function NavScrollExample() {
  const navigate = useNavigate();
  const [affichage, setAffichage] = useState(false);
  const { utilisateur } = useAuth();

  const change = () => setAffichage(!affichage);

  const Deconnexion = () => {
    signOut(auth)
    useNavigate('/')
  }

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
              <div className="d-flex align-items-center flex-column" style={{ cursor: "pointer" }} onClick={change}>
                <FaUserCircle style={{ fontSize: "24px" }} />
                <span className="ms-2" style={{ fontSize: "10px" }}>{utilisateur.email}</span>
              </div>
            </div>
          )}
        </div>

        {affichage && (
          <div className="position-absolute d-flex flex-column gap-2 p-3 bg-light shadow" style={{ top: "20px", right: "10px" }}>
            <p
              className="p-2" style={{ cursor: "pointer" }}
              onClick={Deconnexion}
            >
              Déconnexion
            </p>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
