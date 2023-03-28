import Card from "../../atoms/card"
import { useEffect, useState } from "react"
import axios from 'axios'
import "./style.css"

function Cards(){
    const [filme, setFilme] = useState();

    useEffect(() => {
        axios
        .get('http://localhost:3000/filme')
        .then((resposta) => {
            setFilme(resposta.data)
        })
        .catch((erro) => console.log(erro));
    })

    console.log(filme)

    return(
        <div className="cards">
            <div className="interno">
                {filme?.map((e) => {
                    return(
                        <Card titulo={e.nome}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards