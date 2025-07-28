import './Titre.css'

const Titre = ({titre, paragraphe}) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="titre text-center">
                    <h3>{titre}</h3>
                    <p className="mt-4">{paragraphe}</p>
                </div>
            </div>
        </div>
    )
}

export default Titre