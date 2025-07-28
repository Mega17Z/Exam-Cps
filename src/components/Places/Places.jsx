import { useState } from "react";
import './Places.css'

const places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const prix = 15000

const ReserverPlaces = ({course}) => {
    const [placeChoisi, setPlaceChoisi] = useState([])
    
    const Choisi = (place) => {
        if(placeChoisi.includes(place)){
            setPlaceChoisi(placeChoisi.filter(choix => choix != place))
        }else{
            setPlaceChoisi([...placeChoisi, place])
        }
    }

    return ( 
        <div className='container p-3 border'>
            <div className="d-flex justify-content-between">
                <div className='text-start'>
                    <h5>{course.depart} - {course.arriver}</h5>
                    <p>Dakar Dem Dik</p>
                    <p>Heure de depart : <em>{course.heurDepart}</em></p>
                </div>
                <div className='text-center d-flex flex-column justify-content-end'>
                    <h6>Prix par places</h6>
                    <p>{course.prixPlace} fr</p>
                </div>
            </div>
            <h6>Chaoisssez vos places</h6>
            <div className="p-3 border mb-3">
                <div className="car px-1 px-md-4 d-flex justify-content-between gap-3 flex-wrap">
                    {course.placeRestant.map((place, index) => (
                        <div className="place d-flex justify-content-center align-items-center" key={index} style={{ cursor: "pointer" }} onClick={() => Choisi(place)}>
                        {place}
                        </div>
                    ))}
                </div>
            </div>
            <h6>Places Reserver</h6>
            <div className="p-3 border mb-3">
                <div className="car px-1 px-md-4 d-flex align-items-center gap-3">
                    {placeChoisi.length ? placeChoisi.map((place, index) => (
                        <div className="place d-flex justify-content-center align-items-center" key={index} style={{ cursor: "pointer" }}>
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
                    <p><u>Total</u> : <em>{placeChoisi.length * prix}</em> fr</p>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <p><u>Precedent</u></p>
                <p><u>Suivant</u></p>
            </div>
        </div>
     );
}
 
export default ReserverPlaces;