import InputGoup from "./InputComposant/Input";
import Titre from "../Titre/Titre";
import { useState } from "react";

const ville = ["Dakar","Thies","Mbour","Fatick","Koalack","Kedougou", "Tamba-Counda", "Ziguinchor", "Thies"]
const Heure = ["07h30","08h30","09h30","10h30","11h30","12h30","13h30","14h30","15h30","16h30","17h30","18h30","19h30","20h30","21h30","22h30"]
const vehicule = ["Ndiaga Ndiaye", "Dakar Dem Dick", "Bus", "Taxi"]
const options = ["Climatiseur", "Escales"]

const Recherche = ({recherches}) => {
    const [depart, setDepart] = useState("")
    const [arriver, setArriver] = useState("")
    const [heures, setHeures] = useState("")
    const [voitures, setVoitures] = useState("")
    const [option, setOption] = useState("")

    const faireRecherche = () => {
        recherches({ depart, arriver, heures, voitures, option })
    }

    return ( 
        <>
        <div className="py-4">
            <Titre titre="Recherche" paragraphe="Rechercher une course selon votre disponibilité" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Ville de départ" ville={ville} onChange={setDepart} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Ville d'arriver" ville={ville} onChange={setArriver} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Heure de départ" ville={Heure} onChange={setHeures} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Type de véhicule" ville={vehicule} onChange={setVoitures} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Options" ville={options} onChange={setOption} />
                    </div>
                    <div className="col-md-4 my-3 d-flex align-items-end">
                        <button style={{ backgroundColor: "blue", borderRadius: "15px", maxWidth: "250px", width: "100%" }} className="btn" onClick={faireRecherche}>Recherche</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Recherche;