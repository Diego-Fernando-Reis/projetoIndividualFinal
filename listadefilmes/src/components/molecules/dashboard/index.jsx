import "./style.css"

function Dashboard(){
    return(
        <>
            <form action="" className="post">
                <input type="text" placeholder="nome"/>
                <input type="text" placeholder="sinopse"/>
                <input type="text" placeholder="cartaz"/>
                <button>Enviar</button>
            </form>
            <form action="" className="put">
                <input type="text" placeholder="nome"/>
                <input type="text" placeholder="sinopse"/>
                <input type="text" placeholder="cartaz"/>
                <button>Enviar</button>
            </form>
        </>
        
    )
}

export default Dashboard