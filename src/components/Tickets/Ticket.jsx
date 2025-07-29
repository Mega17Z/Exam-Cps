import { useState } from "react";
import qr from "../../assets/qr.png"
import { useOutletContext, useParams } from "react-router-dom";

const tableau = [
            {id: 1, depart: "Dakar", arriver: "Mbour", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 2, depart: "Tamba-Counda", arriver: "Thies", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 3, depart: "Ziguinchor", arriver: "Fatick", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 4, depart: "Kolda", arriver: "Kedougou", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 5, depart: "Matam", arriver: "Dakar", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000}
]

const Ticket = () => {
    // const [nombrePlace, setNombrePlace] = useState([2, 5, 7])
    const { placeChoisies, total, lesReserve} = useOutletContext()
    console.log(lesReserve)
    const { leId } =useParams()
    const course = tableau.find(item => item.id === parseInt(leId));

    return ( 
        <>
        <div className='container p-1 pt-5 d-flex align-items-center' style={{ minHeight: "90vh" }}>
            <div className="p-3 mt-4" style={{ width: "90%", margin: "auto", boxShadow: "0px 2px 5px #0000002f", borderRadius: "5px" }}>
            {/* <div className="container p-4 border"> */}
                <div className="row">
                    <div className="col-md-12 my-3" style={{ borderBottom: "1px solid" }}>
                        <div className="d-flex justify-content-between">
                            <div className='text-start'>
                                <h5>{course?.depart} - {course?.arriver}</h5>
                                <p>Dakar Dem Dik</p>
                                <p>Heure de depart : <em>{course?.heurDepart}</em></p>
                            </div>
                            <div className='text-center d-flex flex-column justify-content-center text-start'>
                                <p>Prix par places : <em>{course?.prixPlace} fr</em></p>
                                <p>Nombres de places Choisis : <em>{placeChoisies.length}</em></p>
                                <p>Total : <em>{total} fr</em></p>
                            </div>
                        </div>
                    </div>
                    {placeChoisies.map((place, index) => (
                        <div className="col-md-12 my-1" style={{ borderBottom: "1px solid #adadad" }} key={index}>
                            <div className="d-flex justify-content-between">
                                <div className='text-start'>
                                    <p className="m-0" style={{ fontStyle: "italic", fontWeight: "500" }}>- {lesReserve[index].prenom} {lesReserve[index].nom}</p>
                                    <p className="my-1 ms-3">* {lesReserve[index].telephone}</p>
                                    <p className="m-0 ms-3">* Places N°: <b>{place}</b></p>
                                </div>
                                <div style={{ width: "70px", height: "70px" }}>
                                    <img src={qr} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-center flex-column text-center">
                        <p className="m-0">TransGo vous remerci de votre confiance</p>
                        <p className="m-0">Bon Voyage</p>
                    </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default Ticket;