import { useState } from 'react'
import og from '../../assets/om.png'
import wv from '../../assets/wave.png'
import qr from '../../assets/qr.png'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

const Paiement = () => {
    const [paye, setPaye] = useState(null)
    const { total, placeChoisies, leId } = useOutletContext()

    const lesModes = [{image: og, nom: "Orange Money"}, {image: wv, nom: "Wave"}]

    const navigate = useNavigate()
    const { id } = useParams()


    const Valider = () => {
        navigate(`/utilisateur/${id}/ticket/${leId}`)
    }

    return ( 
        <>
        <div className='container p-1 d-flex align-items-center' style={{ minHeight: "90vh" }}>
        {/* <div className='container'> */}
            <div className="p-3" style={{ width: "90%", margin: "auto", boxShadow: "0px 2px 5px #0000002f", borderRadius: "5px" }}>
            <h5 className=""><u>Mode de Paiement</u></h5>
            <div className="d-flex gap-5">
                {lesModes.map((mode, index) => (
                    <div className="d-flex align-items-center gap-2" key={index}>
                        <img src={mode.image} alt="" className="img-fluid" style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover", border: "1px solid #00000053" }} />
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", padding: "2px", border: "1px solid #000", cursor: "pointer" }} onClick={() => setPaye(index)}>
                            {paye === index && <div className="w-100 h-100" style={{ borderRadius: "100%", backgroundColor: "#4aa5eb" }}>
                            </div>}
                        </div>
                        <p className="m-0">{mode.nom}</p>
                    </div>
                ))}
            </div>
            {/* <h6 className='mt-4'>Scan Ici</h6> */}
            <div className="d-flex align-items-center justify-content-center p-3 my-3" style={{ height: "55vh", backgroundColor: paye === 1 ? '#4aa5eb' : 'orange' }}>
                <img src={qr} alt="" className='img-fluid' style={{ border: "1px solid", borderRadius: "5px", boxShadow: "2px 2px 10px #0808088e" }} />
            </div>
            <div className="row justify-content-between align-items-center mb-3">
                <div className="col-md-6 ">
                    <p><u>Nombres de places Choisit</u> : <em>{placeChoisies.length}</em></p>
                </div>
                <div className="col-md-6 text-start text-md-end">
                    <p><u>Total</u> : <em>{total}</em> fr</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button style={{ backgroundColor: paye === 1 ? '#4aa5eb' : 'orange', borderRadius: "15px", maxWidth: "200px", width: "100%" }} className="btn" onClick={Valider}>Valider</button>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Paiement;