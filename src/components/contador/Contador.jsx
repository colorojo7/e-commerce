import { useState } from "react"

const Contador = ({stock=5, init=1, onAdd})=>{
    const [cont, setCont]= useState(init)

    const handleCont_plus = ()=>{
        cont < stock && setCont(cont + 1)
    }

    const handleCont_minus = ()=>{
        cont > 1 && setCont(cont - 1)
    }

    const handleOnAdd = ()=>onAdd(cont)
    
    return (
        <>
        <div className="d-flex flex-wrap">
            <button
                className="btn btn-primary"
                onClick={handleCont_minus}
            >
                -
            </button>

            <div className="mx-2 p-2">
                {cont}
            </div>
            
            <button
                className="btn btn-primary"
                onClick={handleCont_plus}
            >
                +
            </button>   
        </div>
        <button
                onClick={handleOnAdd}
                className="btn btn-primary mt-1"
        >
                Agregar al carrito
        </button>
    </>
    )   
}

export default Contador