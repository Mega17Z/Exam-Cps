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


import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../Firebase';
import { doc, getDoc } from 'firebase/firestore'

// import Inscription from './Inscription';

function Connexion() {
  const [email, setEmail] = useState('');
  const [motdepasse, setMotdepasse] = useState('');
  const navigate = useNavigate();

  const SeConnecter = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, motdepasse);
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === "admin") {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };


  // const SeConnecter = (e) => {
  //   e.preventDefault();

  //   const userCredential = signInWithEmailAndPassword(auth, email, motdepasse)
  //   console.log(userCredential.user)
  //   navigate('/')
  //   // try {
  //   //   let utilisateurFirebase;
  //   //   if (estInscription) {
  //   //     utilisateurFirebase = await createUserWithEmailAndPassword(auth, email, motdepasse);
  //   //   } else {
  //   //     utilisateurFirebase = await signInWithEmailAndPassword(auth, email, motdepasse);
  //   //   }

  //   //   const user = {
  //   //     email: utilisateurFirebase.user.email,
  //   //     uid: utilisateurFirebase.user.uid
  //   //   };
  //   //   localStorage.setItem('utilisateur', JSON.stringify(user));
  //   //   navigate('/');
  //   // } catch (erreur) {
  //   //   alert(erreur.message);
  //   // }
  // };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
     <div className='p-4' style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: "0 0 10px #00000047" }}>
      <h4 className='text-center'>Connexion</h4>
      <form onSubmit={SeConnecter} style={{ width: "100%" }}>
        <div className="mb-3">
          <label className="mb-2">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="mb-2">Mot de passe</label>
          <input type="password" value={motdepasse} onChange={e => setMotdepasse(e.target.value)} className="form-control" required />
        </div>
        <div className="d-flex mt-4 flex-column justify-content-center align-items-center gap-3">
            <button className="btn" type="submit" style={{ backgroundColor: "#000", color: "whitesmoke", borderRadius: "20px", maxWidth: "150px", width: "100%" }}>
            Se connecter
            </button>
            <p className="mt-3">
            Si vous n'avez pas de compte inscrivez-vous ?
            <span style={{ color: "blue", cursor: "pointer" }} className='ms-2' onClick={() => {
                navigate('/inscription')
            }}>
                S'inscrire
            </span>
            </p>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Connexion;
