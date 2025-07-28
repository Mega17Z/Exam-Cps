import { useState } from "react";
import qr from "../../assets/qr.png"

const Ticket = () => {
    const [nombrePlace, setNombrePlace] = useState([2, 5, 7])

    return ( 
        <>
            <div className="container p-4 border">
                <div className="row">
                    <div className="col-md-12 my-3" style={{ borderBottom: "1px solid" }}>
                        <div className="d-flex justify-content-between">
                            <div className='text-start'>
                                <h5>Dakar - Mbour</h5>
                                <p>Dakar Dem Dik</p>
                                <p>Heure de depart : <em>14h30</em></p>
                            </div>
                            <div className='text-center d-flex flex-column justify-content-center text-start'>
                                <p>Prix par places : <em>15000 fr</em></p>
                                <p>Nombres de places Choisis : <em>3</em></p>
                                <p>Total : <em>45000 fr</em></p>
                            </div>
                        </div>
                    </div>
                    {nombrePlace.map((place, index) => (
                        <div className="col-md-12 my-1" style={{ borderBottom: "1px solid" }} key={index}>
                            <div className="d-flex justify-content-between">
                                <div className='text-start'>
                                    <p>Abdoul Wakhab Diouf</p>
                                    <p>77 805 78 81</p>
                                    <h6>Places N°: {place}</h6>
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
        </>
     );
}
 
export default Ticket;