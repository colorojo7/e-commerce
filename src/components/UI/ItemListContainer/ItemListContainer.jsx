import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch";
import ItemList from "./ItemList/ItemList";


const ItemListContainer = () => {
  const [ productos, setProd ]=useState([]);
  const [ loading, setLoading ]=useState(true)
  const {categoriaId} = useParams() 

  useEffect(()=>{
    console.log(categoriaId); 
    if (categoriaId) {
      gFetch()
      .then(data=>setProd(data.filter( item => item.categoria === categoriaId)))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false) )
    } else {
      gFetch()
      .then(data=>setProd(data))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false) )
    }
  },[categoriaId]);


return (
  <div className="d-flex flex-wrap justify-content-center"> 
    {
    loading ? 
      <h2>Cargando...</h2>
        :
      <ItemList productos={productos}/>
    }
    
  </div>
)
}

export default ItemListContainer