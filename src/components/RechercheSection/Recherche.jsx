import InputGoup from "./InputComposant/Input";
import Titre from "./TitreRecherche/Titre";

const ville = ["Dakar","Thies","Mbour","Fatick","Koalack"]

const Recherche = () => {
    return ( 
        <>
        <div className="py-4">
            <Titre />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Ville de départ" ville={ville} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Ville d'arriver" ville={ville} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Heure de départ" ville={ville} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Type de véhicule" ville={ville} />
                    </div>
                    <div className="col-md-4 my-3">
                        <InputGoup nom="Options" ville={ville} />
                    </div>
                    <div className="col-md-4 my-3 d-flex align-items-end">
                        <button style={{ backgroundColor: "blue", borderRadius: "15px", maxWidth: "250px", width: "100%" }} className="btn">Recherche</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Recherche;