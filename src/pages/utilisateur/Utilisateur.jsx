import { Outlet, useParams } from "react-router-dom";
import Paiement from "../../components/Validation/Validation";
import ReserverPlaces from "../../components/Places/Places";
import Ticket from "../../components/Tickets/Ticket";
import { useState } from "react";


const Utilisateur = () => {
    const [placeChoisies, setPlacesChoisies] = useState([])
    const [total, setTotal] = useState("")
    const [lesReserve, setLesReserve] = useState([])
    const [leId, setLeId] = useState(null)

    return ( 
        <div>
            <Outlet context={{ placeChoisies, setPlacesChoisies, total, setTotal, lesReserve, setLesReserve, leId, setLeId }} />
        </div>
     );
}
 
export default Utilisateur;