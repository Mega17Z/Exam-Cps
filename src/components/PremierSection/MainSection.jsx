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
                        <h1>Titre de mon paragraphe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione quod! Facere similique quibusdam aliquam at id voluptatum laboriosam perferendis, quae porro fugiat consequatur consequuntur repudiandae ab autem, est dicta?</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default MainSection