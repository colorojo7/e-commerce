import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "../../Loading/Loading";
import ItemList from "./ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = () => {
  const [ productos, setProd ]=useState([]);
  const [ loading, setLoading ]=useState(true)
  const {categoriaId} = useParams() 

 
  useEffect(()=>{
    
      const db = getFirestore()
      const queryCollection=collection(db, 'productos')
      
      const queryOption = categoriaId ? 
                    query (queryCollection, where('categoria','==',categoriaId)) 
                    : 
                    queryCollection
     
      getDocs(queryOption)
      .then(res => setProd(res.docs.map(item => ({id:item.id, ...item.data()}))))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false) )

  },[categoriaId])

return (
  <div className="d-flex flex-wrap justify-content-center"> 
    {
    loading ? 
      <Loading/>
        :
      <ItemList productos={productos}/>
    }
    
  </div>
)
}

export default ItemListContainer