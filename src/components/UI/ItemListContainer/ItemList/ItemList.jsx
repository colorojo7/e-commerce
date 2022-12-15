import Producto_card from "../../../Producto_card/Producto_card"

const ItemList = ({productos}) => {
  return (
    
        productos.map(producto => <Producto_card  
                                key={producto.id} 
                                id={producto.id} 
                                precio={producto.precio} 
                                titulo={producto.titulo} 
                                img={producto.img}
                              />
    )
    
  )
}

export default ItemList