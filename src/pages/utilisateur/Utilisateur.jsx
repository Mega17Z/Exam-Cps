import { useParams } from "react-router-dom";
import Paiement from "../../components/Paiement/Paiement";
import ReserverPlaces from "../../components/Places/Places";
import Ticket from "../../components/Tickets/Ticket";

const tableau = [
            {id: 1, depart: "Dakar", arriver: "Mbour", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 2, depart: "Tamba-Counda", arriver: "Thies", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 3, depart: "Ziguinchor", arriver: "Fatick", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 4, depart: "Kolda", arriver: "Kedougou", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000},
            {id: 5, depart: "Matam", arriver: "Dakar", heurDepart: "14h30", placeRestant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prixPlace: 15000}
]

const Utilisateur = () => {
    const { id } = useParams()
    const reserve = tableau.find(course => course.id === parseInt(id))

    return ( 
        <>
            <ReserverPlaces course={reserve} />
            <Paiement />
            <Ticket />
        </>
     );
}
 
export default Utilisateur;