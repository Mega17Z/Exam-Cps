import { useState } from "react";
import InputText from "../InputForm/InputForm";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const Validation = () => {
    // const [nombrePlace, setNombrePlace] = useState([2, 5, 7])
    const { placeChoisies, setLesReserve } = useOutletContext()
    const [personne, setPersonne] = useState(placeChoisies.map(() => ({
        prenom: "",
        nom: "",
        telephone: "",
        carte: ""
    })))
    const navigate = useNavigate()
    const { id } = useParams()

    const Saisi = (index, asaisir, masaisi) => {
        const nouveau = [...personne]
        nouveau[index][asaisir] = masaisi
        setPersonne(nouveau)
    }

    const Payer = () => {
        console.log(personne)
        setLesReserve(personne)
        navigate(`/utilisateur/${id}/paiement`)
    }

    return ( 
        <div className="container p-3 border">
            <h5><u>Paiement</u></h5>
            {placeChoisies.map((place, index) => (
                <div className="my-4 pb-3" key={index} style={{ borderBottom: "1px solid black" }}>
                    <h6>Place N°: <b>{place}</b></h6>
                    <div className="row">
                        <div className="col-md-6">
                            <InputText nom="Prénom" type="text" placeholder="Votre prénom" value={personne[index].prenom} onChange={(e) => Saisi(index, "prenom", e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <InputText nom="Nom" type="text" placeholder="Votre nom" value={personne[index].nom} onChange={(e) => Saisi(index, "nom", e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <InputText nom="Téléphone" type="Text" placeholder="Votre Numero" value={personne[index].telephone} onChange={(e) => Saisi(index, "telephone", e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <InputText nom="Numero d'identité" type="text" placeholder="Votre d'identité National" value={personne[index].carte} onChange={(e) => Saisi(index, "carte", e.target.value)} />
                        </div>
                    </div>
                </div>
            ))}

            <div className="d-flex justify-content-between">
                <p><u>Precedent</u></p>
                <p style={{ cursor: "pointer" }} onClick={Payer}><u>Suivant</u></p>
            </div>
        </div>
     );
}
 
export default Validation;