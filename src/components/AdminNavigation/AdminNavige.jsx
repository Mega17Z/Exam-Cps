import { useEffect, useState } from "react";
// import { FaUserTie, FaUsers, FaChartBar } from "react-icons/fa";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaUserTie, FaUsers, FaChartBar } from "react-icons/fa";
import Titre from "../Titre/Titre";
import InputText from "../InputForm/InputForm";
import { auth, db } from "../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";


const gestions = [
  {
    id: 1,
    icon: <FaUserTie size={13} />,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <FaUsers size={13} />,
    text: "Ajouter un trajet",
  },
  {
    id: 3,
    icon: <FaChartBar size={13} />,
    text: "Validation des reservations",
  },
];

const statistiques = [
  { id: 1, title: "Reservations/jours", nombre: "75" },
  { id: 2, title: "Recettes Totales", nombre: "150" },
  { id: 3, title: "Trajets plus demandés", nombre: "Dakar - Mbour" }
];

const AdminNavige = () => {
    const [siActive, setSiActive] = useState(1);
    const [tableau , setTableau] = useState([])
    console.log(tableau)

    const [depart, setDepart] = useState("");
    const [arriver, setArriver] = useState("");
    const [date, setDate] = useState("");
    const [heureDepart, setHeureDepart] = useState("");
    const [vehicule, setVehicule] = useState("");
    const [placesRestantes, setPlacesRestantes] = useState("");
    const [prix, setPrix] = useState("");
    const [gares, setGares] = useState("");
    const [conducteurUn, setConducteurUn] = useState("");
    const [conducteurDeux, setConducteurDeux] = useState("");

    useEffect(() => {
       const recupeTab = async () => {
        try{
            const courses = collection(db, "courses")
            const recupCourse = await getDocs(courses)
            const courseSolo = recupCourse.docs.map(doc => doc.data())
            setTableau(courseSolo)
        }catch(error){
            console.error(error)
        }
       }

       recupeTab()
    }, [])

    const envoyer = async (e) => {
        e.preventDefault();

        const Courses = { depart, arriver, date, heureDepart, vehicule, placesRestantes, prix, gares, conducteurUn, conducteurDeux, }

        try {
        await addDoc(collection(db, "courses"), Courses)
            setDepart("")
            setArriver("")
            setDate("")
            setHeureDepart("");
            setVehicule("")
            setPlacesRestantes("");
            setPrix("")
            setGares("");
            setConducteurUn("")
            setConducteurDeux("");
        } catch (error) {
            console.error(error);
        }
    };

    return ( 
        <>
        <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    marginTop: "20px"
                    }}>
                    {gestions.map((item) => {
                        const isActive = item.id === siActive
                        return (
                        <div key={item.id}
                        onClick={() => setSiActive(item.id)}
                        style={{
                            backgroundColor: isActive ? "#222222" : "transparent",
                            borderBottom: "1px solid #ddd",
                            borderLeft: "1px solid #ddd",
                            borderRadius: "2px",
                            color: isActive ? "#f0f0f0" : "#4e4d4d",
                            padding: "5px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            boxShadow: isActive ? "0 2px 4px rgba(0,0,0,0.05)" : "0 2px 2px rgba(0,0,0,0.06)",
                            fontSize: "13px",
                            // fontWeight: "500",
                            transition: "all .3s ease-in-out",
                            cursor: "pointer"
                        }}
                        >
                        {item.icon}
                        <span className="d-none d-md-inline">{item.text}</span>
                        </div>
                        )
                    })}
        </div>

        <div>
            {siActive === 1 && (
                <>
                <div
                    style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    justifyContent: "start",
                    gap: "20px",
                    marginTop: "20px",
                    // padding: "0 5px"
                }}
                >
                {statistiques.map(({ id, title, nombre }) =>{
                    return (
                        <div
                            key={id}
                            style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            backgroundColor: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: "20vh",
                            // maxWidth: "250px",
                            width: "100%",
                            minWidth: "0"
                            // margin: "0 auto"
                        }}
                    >
                    <p
                        style={{
                        fontSize: "15px",
                        color: "#818181",
                        fontWeight: "500",
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </p>
                    {/* Ligne avec nombre, poucentage + pourcentage */}
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        }}
                    >
                    <p
                    style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        margin: 0,
                    }}
                    >
                        {nombre}
                    </p>
                </div>
            </div>
            )
            }
            )}
                </div>
                <div>
                    <Titre titre="Listes des Courses" />

                    {tableau.map((element, index) => {
                        return(
                        <div className="p-3 my-2" style={{ borderRadius: "5px", border: "1px solid #b9b9b9" }}>
                            <div className="d-flex justify-content-between" key={index}>
                                <div className="text-start">
                                    <h5 className="m-0">{element.depart} - {element.arriver}</h5>
                                    <p className="my-1">Le 12 Avril 2025 à {element.heurDepart}</p>
                                    <p className="m-0">Vehicule : <em>Dakar Dem Dik</em></p>
                                    <p className="my-1">Places Restant : <em>12</em></p>
                                </div>
                                <div className="text-center">
                                    <p className="d-flex flex-column align-items-center my-1"><b>Gare</b><span>Dior</span></p>
                                    <p className="d-flex flex-column align-items-center my-1"><b>Conducteur</b><span>Moussa Diop</span><span>Samba Faye</span></p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                </>
            )}
            {siActive === 2 && (
                // <div className="container p-3 mt-5" style={{ borderTop: "1px solid #dcdcdc", borderBottom: "1px solid #dcdcdc" }}>
                // <div className="row">
                //     <div className="col-md-4">
                //         <InputText nom="Depart" type="text" placeholder="ville de depart" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Arriver" type="text" placeholder="ville de arriver" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Date" type="date" placeholder="Jour de depart" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Heure de depart" type="text" placeholder="Heure de depart" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Vehicule" type="text" placeholder="Vehicule" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Places Restants" type="number" placeholder="Places restants" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Prix" type="number" placeholder="prix par places" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Gares" type="text" placeholder="gare" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Conducteur 1" type="text" placeholder="Conducteurs" />
                //     </div>
                //     <div className="col-md-4">
                //         <InputText nom="Conducteur 2" type="text" placeholder="Conducteurs" />
                //     </div>
                //     <div className="d-flex justify-content-center mt-3">
                //         <button style={{ backgroundColor: "#000000de", borderRadius: "15px", maxWidth: "250px", width: "100%", color: "whitesmoke" }} className="btn">Enregistrer</button>
                //     </div>
                // </div>
                // </div>
                <div className="container p-3 mt-5" style={{ borderTop: "1px solid #dcdcdc", borderBottom: "1px solid #dcdcdc" }} >
                    <div className="row">
                        <div className="col-md-4">
                            <InputText
                            nom="Depart"
                            type="text"
                            placeholder="ville de depart"
                            value={depart}
                            onChange={(e) => setDepart(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Arriver"
                            type="text"
                            placeholder="ville de arriver"
                            value={arriver}
                            onChange={(e) => setArriver(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Date"
                            type="date"
                            placeholder="Jour de depart"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Heure de depart"
                            type="text"
                            placeholder="Heure de depart"
                            value={heureDepart}
                            onChange={(e) => setHeureDepart(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Vehicule"
                            type="text"
                            placeholder="Vehicule"
                            value={vehicule}
                            onChange={(e) => setVehicule(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Places Restantes"
                            type="number"
                            placeholder="Places restants"
                            value={placesRestantes}
                            onChange={(e) => setPlacesRestantes(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Prix"
                            type="number"
                            placeholder="prix par places"
                            value={prix}
                            onChange={(e) => setPrix(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Gares"
                            type="text"
                            placeholder="gare"
                            value={gares}
                            onChange={(e) => setGares(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Conducteur 1"
                            type="text"
                            placeholder="Conducteurs"
                            value={conducteurUn}
                            onChange={(e) => setConducteurUn(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputText
                            nom="Conducteur 2"
                            type="text"
                            placeholder="Conducteurs"
                            value={conducteurDeux}
                            onChange={(e) => setConducteurDeux(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button
                            style={{
                                backgroundColor: "#000000de",
                                borderRadius: "15px",
                                maxWidth: "250px",
                                width: "100%",
                                color: "whitesmoke",
                            }}
                            className="btn"
                            onClick={envoyer}
                            >
                            Enregistrer
                            </button>
                        </div>
                        </div>
                    </div>
            )}
            {siActive === 3 && (
                <div className="container mt-4 p-3" style={{ borderTop: "1px solid #dddddd", borderBottom: "1px solid #dddddd" }}>
                    <div className="row">
                        <div className="col-md-6 p-1">
                            <div className="p-2" style={{ borderRadius: "5px", border: "1px solid #d0d0d0" }}>
                                <h6>Abdoul Wakhab Diouf</h6>
                                <p>77 805 78 81</p>
                                <p>Vehicule: <em>Particuliers</em></p>
                                <p>Nombres de places: <em>2</em></p>
                                <p>Total: <em>10000</em>fr</p>
                                <hr />
                                <div className="d-flex-justify-content-center">
                                    <button style={{ backgroundColor: "#000000de", borderRadius: "15px", maxWidth: "150px", width: "100%", color: "whitesmoke" }} className="btn">Valider</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-1">
                            <div className="p-2" style={{ borderRadius: "5px", border: "1px solid #d0d0d0" }}>
                                <h6>Abdoul Wakhab Diouf</h6>
                                <p>77 805 78 81</p>
                                <p>Vehicule: <em>Particuliers</em></p>
                                <p>Nombres de places: <em>2</em></p>
                                <p>Total: <em>10000</em>fr</p>
                                <hr />
                                <div className="d-flex-justify-content-center">
                                    <button style={{ backgroundColor: "#000000de", borderRadius: "15px", maxWidth: "150px", width: "100%", color: "whitesmoke" }} className="btn">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
     );
}
 
export default AdminNavige;