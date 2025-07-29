import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function StaticExample({masquer, changement}) {
    const navigate = useNavigate()

  return (
    <Modal show={masquer} onHide={changement}>
        <Modal.Header closeButton>
          <Modal.Title>Utilisateur non connecter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Veillez vous connecter pour pouvoir faire une reservations</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={changement}>Retour</Button>
          <Button variant="primary" onClick={() => {
            changement()
            navigate('/connexion')
          }}>S'inscrire</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default StaticExample;