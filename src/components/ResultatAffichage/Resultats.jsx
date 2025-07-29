import { useNavigate } from "react-router-dom";
import Titre from "../Titre/Titre";
import { useState } from "react";


const Affichage = ({tableau, utilisateur, setUtilisateur}) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    const CourseChoisi = (id) => {
        navigate(`/utilisateur/${id}`)
    }

    return ( 
        <>
            <div className="container my-3">
                <Titre titre="Course Disponible" paragraphe="Les resultats de vos recherche" />
                <div className="row">
                    {tableau.length ? tableau.map((recherche, index) => (
                        <div className="col-12 p-1 py-2 border-bottom my-3" key={index}>
                            <div className="d-flex justify-content-between">
                                <div className="text-center">
                                    <h6>Trajet</h6>
                                    <p>{recherche.depart} - {recherche.arriver}</p>
                                </div>
                                <div className="text-center">
                                    <h6>Heure de départ</h6>
                                    <p>{recherche.heurDepart}</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <h6>Places Restant</h6>
                                    <p style={{ width: "25px", height: "25px", backgroundColor: "yellow" }} className="d-flex align-items-center justify-content-center">{recherche.placeRestant}</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button style={{ backgroundColor: "orange", borderRadius: "15px", maxWidth: "200px", width: "100%" }} className="btn" onClick={() => CourseChoisi(recherche.id)}>Reserver</button>
                            </div>
                        </div>
                    )) : <p className="text-center">Aucune course disponible</p>}
                </div>
            </div>
        </>
     );
}
 
export default Affichage;