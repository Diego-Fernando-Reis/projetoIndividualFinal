import "./style.css"

function Card(props){
    return(
        <div className="card">
            <div className="imagem"></div>
            <div className="titulo">
                <h2>{props.titulo}</h2>
            </div>
        </div>
    )
}

export default Card