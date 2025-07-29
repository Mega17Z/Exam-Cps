import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavScrollExample from "../components/Navbar/Navbar";
import MainSection from "../components/PremierSection/MainSection";
import Recherche from "../components/RechercheSection/Recherche";
import Affichage from "../components/ResultatAffichage/Resultats";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";


const Accueil = () => {
    const [resultats, setResultats] = useState([])
    const [utilisateur, setUtilisateur] = useState(null)

    useEffect(() => {
        const deconnecter = onAuthStateChanged(auth, (user) => {
            if (user) {
            setUtilisateur(user);
            } else {
            setUtilisateur(null);
            }
        });

        return () => deconnecter();
        }, []);

    const RechercheCourse = (course) => {

        const tableau = [
            {id: 1, depart: "Dakar", arriver: "Mbour", heurDepart: "14h30", placeRestant: 25},
            {id: 2, depart: "Tamba-Counda", arriver: "Thies", heurDepart: "14h30", placeRestant: 25},
            {id: 3, depart: "Ziguinchor", arriver: "Fatick", heurDepart: "14h30", placeRestant: 25},
            {id: 4, depart: "Kolda", arriver: "Kedougou", heurDepart: "14h30", placeRestant: 25},
            {id: 5, depart: "Matam", arriver: "Dakar", heurDepart: "14h30", placeRestant: 25}
        ]

        const resultat = tableau.filter(recherche => (recherche.depart.toLowerCase() === course.depart.toLowerCase() && recherche.arriver.toLowerCase() === course.arriver.toLowerCase() || recherche.depart.toLowerCase() === course.arriver.toLowerCase() && recherche.arriver.toLowerCase() === course.depart.toLowerCase()))
        setResultats(resultat)
    }


    return ( 
        <>
            <NavScrollExample />
            <MainSection />
            <Recherche recherches={RechercheCourse} />
            <Affichage tableau={resultats} utilisateur={utilisateur} setUtilisateur={setUtilisateur} />
            <Footer />
        </>
     );
}
 
export default Accueil;