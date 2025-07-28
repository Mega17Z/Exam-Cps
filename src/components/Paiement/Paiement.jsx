import { useState } from "react";
import InputText from "../InputForm/InputForm";
import og from '../../assets/om.png'
import wv from '../../assets/wave.png'

const Paiement = () => {
    const [nombrePlace, setNombrePlace] = useState([2, 5, 7])
    const [paye, setPaye] = useState(null)

    const lesModes = [{image: og, nom: "Orange Money"}, {image: wv, nom: "Wave"}]

    return ( 
        <div className="container p-3 border">
            <h5><u>Paiement</u></h5>
            {nombrePlace.map((place, index) => (
                <div className="my-4 pb-3" key={index} style={{ borderBottom: "1px solid black" }}>
                    <h6>Place N°: <b>{place}</b></h6>
                    <div className="row">
                        <div className="col-md-6">
                            <InputText nom="Prénom" type="text" placeholder="Votre prénom" />
                        </div>
                        <div className="col-md-6">
                            <InputText nom="Nom" type="text" placeholder="Votre nom" />
                        </div>
                        <div className="col-md-6">
                            <InputText nom="Téléphone" type="Text" placeholder="Votre Numero" />
                        </div>
                        <div className="col-md-6">
                            <InputText nom="Numero d'identité" type="text" placeholder="Votre d'identité National" />
                        </div>
                    </div>
                </div>
            ))}

            <h6 className="text-center"><u>Mode de Paiement</u></h6>
            <div className="d-flex justify-content-evenly">
                {lesModes.map((mode, index) => (
                    <div className="d-flex flex-column justify-content-center align-items-center gap-2" key={index}>
                        <img src={mode.image} alt="" className="img-fluid" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", border: "1px solid #00000053" }} />
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", padding: "2px", border: "1px solid #000", cursor: "pointer" }} onClick={() => setPaye(index)}>
                            {paye === index && <div className="w-100 h-100" style={{ borderRadius: "100%", backgroundColor: "blue" }}>
                            </div>}
                        </div>
                        <p className="m-0">{mode.nom}</p>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button style={{ backgroundColor: "orange", borderRadius: "15px", maxWidth: "200px", width: "100%" }} className="btn">Valider</button>
            </div>
        </div>
     );
}
 
export default Paiement;