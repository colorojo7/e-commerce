import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch"
import DetalleItem from "./DetalleItem/DetalleItem"


const DetalleUI = () => {
   const {productoId}= useParams()
   const [producto, setProducto]=useState({})

   useEffect(()=>{
    gFetch(productoId)
    .then(data=>setProducto(data))
    .catch(err=>console.log(err))
   },[])
 
    
    
  return (
    <div className="p-3">
        <DetalleItem 
            id={producto.id} 
            img= {producto.img}
            titulo={producto.titulo} 
            precio={producto.precio}
            />
    </div>
  )
}

export default DetalleUI