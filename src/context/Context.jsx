import { useState, createContext, useContext} from "react";

const CartContext = createContext([])

export const useCartContext=()=>useContext(CartContext)

export const CartContextProvider = ( { children } ) =>{
    const [cartList,setCartList]= useState([])
    
    const addToCart=(item)=>{
        const idx= cartList.findIndex(inCartItem=>inCartItem.id===item.id)
        
        if (idx===-1){
            setCartList([
                ...cartList,
                item
            ]
                )
        } else {
            cartList[idx].cantidad += item.cantidad
            setCartList([...cartList])
        }
        
    }
    const vaciarCarrito = ()=> setCartList([]) 

    const totalQ = cartList.reduce((count,item) => count += item.cantidad, 0)
    const total$ = cartList.reduce((count,item) => count += item.precio * item.cantidad, 0)
    const deleteItem = ( id ) => setCartList(cartList.filter( item => item.id !== id))
    
    return(
        <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito,
        deleteItem,
        totalQ,
        total$,
        }}>
            { children }
        </CartContext.Provider>

    )
}