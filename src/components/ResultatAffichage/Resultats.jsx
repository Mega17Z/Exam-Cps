import { useNavigate } from "react-router-dom";
import Titre from "../Titre/Titre";
import { useState } from "react";
import StaticExample from "../Modal/Modal";
import { useAuth } from "../Context/AuthentificationContext";


const Affichage = ({tableau}) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const { utilisateur } = useAuth()

    console.log(utilisateur)

    const CourseChoisi = (id) => {
        if(!utilisateur){
            setModal(true)
            return
        }
        navigate(`/utilisateur/${id}`)
    }

    return ( 
        <>
            <div className="container my-3">
                <Titre titre="Course Disponible" paragraphe="Les resultats de vos recherche" />
                <div className="row">
                    {tableau.length ? tableau.map((recherche, index) => (
                        <div className="col-12 p-1 py-2 px-3 border-bottom my-3" key={index} style={{ border: "1px solid #0000004c", borderRadius: "5px" }}>
                            <div className="d-flex justify-content-between">
                                <div className="text-center">
                                    <h6><u>Trajet</u></h6>
                                    <p><em>{recherche.depart} - {recherche.arriver}</em></p>
                                </div>
                                <div className="text-center">
                                    <h6><u>Heure de départ</u></h6>
                                    <p><em>{recherche.heurDepart}</em></p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <h6><u>Places Restant</u></h6>
                                    <p style={{ width: "35px", height: "35px", backgroundColor: "black", color: "whitesmoke", borderRadius: "50%" }} className="d-flex align-items-center justify-content-center">{recherche.placeRestant}</p>
                                </div>
                            </div>
                            {/* <div className="d-flex justify-content-center"> */}
                                <button style={{ backgroundColor: "black", color: "whitesmoke", borderRadius: "10px", maxWidth: "100px", width: "100%", top: '-10px', position: "relative" }} className="btn" onClick={() => CourseChoisi(recherche.id)}>Reserver</button>
                            {/* </div> */}
                        </div>
                    )) : <p className="text-center">Aucune course disponible</p>}
                </div>
            </div>

            <StaticExample masquer={modal} changement={() => setModal(false)} />
        </>
     );
}
 
export default Affichage;