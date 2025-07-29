import React from "react";
import './MainSect.css'
import back from '../../assets/back.jpg'
import image from '../../assets/im.png'

const MainSection = () => {
    return (
        <>
        <main>
            <img src={back} alt="" className="position-absolute w-100 h-100 limage" />
            <div className="container-fluid">
                <div className="row align-items-center lemain">
                    <div className="col-md-6 d-flex justify-content-start mt-3">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 text-center">
                        <h3>- <em>TranGo Senegal</em></h3>
                        <p style={{ fontSize: "18px" }} className="mt-1 mt-md-5">TransGo Sénégal vous connecte aux quatre coins du pays en toute simplicité. Réservez vos places en ligne, choisissez votre siège, payez en toute sécurité… et voyagez l’esprit tranquille.</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default MainSection