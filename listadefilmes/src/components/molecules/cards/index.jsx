import Card from "../../atoms/card"
import "./style.css"

function Cards(){
    return(
        <div className="cards">
            <div className="interno">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Cards