import { useCartContext } from "../../../../context/Context"
import CartItem from "./CartItem/CartItem"

const Carrito = () => {
  const { cartList } = useCartContext()
  
  
  return (
    <div className="p-5">
      {cartList.map(item => <CartItem
                    
                    key={item.id}
                    id={item.id} 
                    precio={item.precio} 
                    titulo={item.titulo} 
                    img={item.img}
                    cantidad={item.cantidad}
                    
                    />
        )
      }
    </div>  
  )
}

export default Carrito