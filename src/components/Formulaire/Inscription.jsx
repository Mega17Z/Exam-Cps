// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../../Firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { inscriptUtilisateur } from "../Context/AuthFirestoreRole";

const Inscription = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [motdepasse, setMotdepasse] = useState('');
    // const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const Sinscription = async (e) => {
    e.preventDefault();
    
    try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, motdepasse);
    //   await updateProfile(userCredential.user, { displayName: nom });

    //   console.log(userCredential.user);

    inscriptUtilisateur(email, motdepasse, nom)

      navigate('/')
    } catch (erreur) {
        console.error(erreur.message)
    }
  };

    return ( 
        <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className='p-4' style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: "0 0 10px #00000047" }}>
            <h4 className='text-center'>Connexion</h4>
            <form onSubmit={Sinscription} style={{ width: "100%" }}>
                <div className="mb-3">
                <label className="mb-2">Nom</label>
                <input type="text" value={nom} onChange={e => setNom(e.target.value)} className="form-control" required />
                </div>
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
                    Si vous avez un compte connectez-vous ?
                    <span style={{ color: "blue", cursor: "pointer" }} className='ms-2' onClick={() => {
                        navigate('/connexion')
                    }}>
                        Se connecter
                    </span>
                    </p>
                </div>
            </form>
            </div>
            </div>
     );
}
 
export default Inscription;