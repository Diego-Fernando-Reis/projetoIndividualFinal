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

    const deleteCard = (id, e) =>{
        axios.delete(`http://localhost:3000/filme/${id}`)
        .then(res => console.log('Postado', res)).catch(err => console.log(err))
    }

    return(
        <div className="cards">
            <div className="interno">
                {filme?.map((e) => {
                    return(
                        <Card titulo={e.nome} onclick={() => deleteCard(e.id)}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards