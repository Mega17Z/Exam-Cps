import { useState } from "react";
import './Places.css'
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
// import CarSimulator from "../CarInteractives/Car";

// const places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tableau = [
            {id: 1, depart: "Dakar", arriver: "Mbour", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 2, depart: "Tamba-Counda", arriver: "Thies", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 3, depart: "Ziguinchor", arriver: "Fatick", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 4, depart: "Kolda", arriver: "Kedougou", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 5, depart: "Matam", arriver: "Dakar", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000}
]
// const prix = 15000

const ReserverPlaces = () => {
    const [placeChoisi, setPlaceChoisi] = useState([])
    const { setPlacesChoisies, setTotal, setLeId } = useOutletContext()
    const navigate = useNavigate()
    const { id } = useParams()
    const reserve = tableau.find(course => course.id === parseInt(id))
    
    const Choisi = (place) => {
        if(placeChoisi.includes(place)){
            setPlaceChoisi(placeChoisi.filter(choix => choix != place))
        }else{
            setPlaceChoisi([...placeChoisi, place])
        }
    }

    const Valid = (id) => {
        if(placeChoisi.length === 0){
            return
        }
        setTotal(placeChoisi.length * reserve.prixPlace)
        setPlacesChoisies(placeChoisi)
        setLeId(reserve.id)
        navigate(`/utilisateur/${id}/validation`)
    }

    return ( 
        <div className='container p-1 pt-5 d-flex align-items-center' style={{ minHeight: "90vh" }}>
            <div className="p-3 mt-4" style={{ width: "90%", margin: "auto", boxShadow: "0px 2px 5px #0000002f", borderRadius: "5px" }}>
            <div className="d-flex justify-content-between">
                <div className='text-start'>
                    <h5>{reserve.depart} - {reserve.arriver}</h5>
                    <p>Dakar Dem Dik</p>
                    <p>Heure de depart : <em>{reserve.heurDepart}</em></p>
                </div>
                <div className='text-center d-flex flex-column justify-content-end'>
                    <h6>Prix par places</h6>
                    <p>{reserve.prixPlace} fr</p>
                </div>
            </div>
            <h6>Choisssez vos places <span style={{ fontSize: "12px" }}><em>(places disponibles)</em></span></h6>
            <div className="p-2 border mb-3" style={{ borderRadius: "5px" }}>
                <div className="car px-1 px-md-4 d-flex justify-content-between gap-3 flex-wrap">
                    {reserve.placeRestant.map((place, index) => (
                        <div className="place d-flex justify-content-center align-items-center" key={index} style={{ cursor: "pointer" }} onClick={() => Choisi(place)}>
                        {place}
                        </div>
                    ))}
                </div>
            </div>
            <h6>Places Reserver</h6>
            <div className="p-2 border mb-3" style={{ borderRadius: "5px" }}>
                <div className="car px-1 px-md-4 d-flex align-items-center gap-3">
                    {placeChoisi.length ? placeChoisi.map((place, index) => (
                        <div className="place d-flex justify-content-center align-items-center" key={index} style={{ cursor: "pointer", backgroundColor: "#79f38b" }} >
                        {place}
                        </div>
                    )) : <p className='m-0'>Pas de places choisi</p>}
                </div>
            </div>

            <div className="row justify-content-between align-items-center mb-3">
                <div className="col-md-6 ">
                    <p><u>Nombres de places Choisit</u> : <em>{placeChoisi.length}</em></p>
                </div>
                <div className="col-md-6 text-end">
                    <p><u>Total</u> : <em>{placeChoisi.length * reserve.prixPlace}</em> fr</p>
                </div>
            </div>
            {/* <CarSimulator /> */}
            <div className="d-flex justify-content-between">
                <p style={{ cursor: "pointer", color: "#a7a8a7c3" }} className="hove">Precedent</p>
                <p style={{ cursor: "pointer", color: "#a7a8a7c3" }} onClick={Valid} className="hove">Suivant</p>
            </div>
            </div>
        </div>
     );
}
 
export default ReserverPlaces;