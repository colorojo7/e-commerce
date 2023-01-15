import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../Loading/Loading"
import DetalleItem from "./DetalleItem/DetalleItem"
import { getFirestore, doc, getDoc } from "firebase/firestore"


const DetalleUI = () => {
   const {productoId}= useParams()
   const [producto, setProducto]=useState({})
   const [ loading, setLoading ]=useState(true)

  useEffect(
    ()=>{
      const db = getFirestore()
      const queryDoc = doc(db,'productos',productoId)
      getDoc(queryDoc)
      .then(res => setProducto({id:res.id, ...res.data()}))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false) )
    },[productoId]
    )
     
  return (
    <>
      <div className="p-3 text-center">
      {
      loading ? 
        <Loading/>
        :
        <DetalleItem 
            id={producto.id} 
            img= {producto.img}
            titulo={producto.titulo} 
            precio={producto.precio}
            />
      }
      </div>
    </>
    
  )
}

export default DetalleUI