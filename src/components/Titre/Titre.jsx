import './Titre.css'

const Titre = ({titre, paragraphe}) => {
    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="titre text-center">
                    <h4>{titre}</h4>
                    <p className="mt-3">{paragraphe}</p>
                </div>
            </div>
        </div>
    )
}

export default Titre