// import InputText from "../InputForm/InputForm";

// const Connexion = () => {
//     return ( 
//         <>
//          <div className="container text center">
//             <h5>Connection</h5>
//             <div className="row">
//                 <div className="col-md-6">
//                     <InputText nom="Utilisateur" placeholder="Nom Utilisateur" type="text" />
//                 </div>
//                 <div className="col-md-6">
//                     <InputText nom="email" placeholder="Votre email" type="email" />
//                 </div>
//                 <div className="col-md-6">
//                     <InputText nom="motdepasse" placeholder="mot de passe" type="password" />
//                 </div>
//                 <div className="col-md-6">
//                     <InputText nom="motdepasse" placeholder="confirmer mot de passe" type="password" />
//                 </div>
//             </div>
//          </div>
//         </>
//      );
// }
 
// export default Connexion;


// import { useState } from 'react';
// import { Form, Button, Card, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Connexion = () => {
//   const [email, setEmail] = useState('');
//   const [motDePasse, setMotDePasse] = useState('');
//   const navigate = useNavigate();

//   const handleConnexion = (e) => {
//     e.preventDefault();

//     // Simulation simple (à remplacer plus tard)
//     if (email && motDePasse) {
//       const utilisateur = { email };
//       localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
//       navigate("/"); // Redirection vers l’accueil ou autre
//     } else {
//       alert("Veuillez remplir tous les champs !");
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
//       <Card style={{ width: '100%', maxWidth: '400px' }}>
//         <Card.Body>
//           <h3 className="text-center mb-4">Connexion</h3>
//           <Form onSubmit={handleConnexion}>
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 placeholder="Entrez votre email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formMotDePasse">
//               <Form.Label>Mot de passe</Form.Label>
//               <Form.Control 
//                 type="password" 
//                 placeholder="Mot de passe"
//                 value={motDePasse}
//                 onChange={(e) => setMotDePasse(e.target.value)} 
//               />
//             </Form.Group>

//             <div className="d-grid">
//               <Button variant="primary" type="submit">
//                 Se connecter
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Connexion;


import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

function Connexion() {
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [estInscription, setEstInscription] = useState(false);
  const navigate = useNavigate();

  const gererFormulaire = async (e) => {
    e.preventDefault();

    try {
      let utilisateurFirebase;
      if (estInscription) {
        utilisateurFirebase = await createUserWithEmailAndPassword(auth, email, mdp);
      } else {
        utilisateurFirebase = await signInWithEmailAndPassword(auth, email, mdp);
      }

      // Stocker l'utilisateur localement
      const user = {
        email: utilisateurFirebase.user.email,
        uid: utilisateurFirebase.user.uid
      };
      localStorage.setItem('utilisateur', JSON.stringify(user));
      navigate('/');
    } catch (erreur) {
      alert(erreur.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3>{estInscription ? "Inscription" : "Connexion"}</h3>
      <form onSubmit={gererFormulaire}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input type="password" value={mdp} onChange={e => setMdp(e.target.value)} className="form-control" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {estInscription ? "S'inscrire" : "Se connecter"}
        </button>
        <p className="mt-2">
          {estInscription ? "Déjà inscrit ?" : "Pas encore inscrit ?"}{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setEstInscription(!estInscription)}>
            {estInscription ? "Se connecter" : "Créer un compte"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Connexion;
