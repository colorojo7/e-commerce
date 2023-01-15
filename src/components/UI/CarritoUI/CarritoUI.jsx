import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/Context"
import ContactForm from "../ContactForm/ContactForm"
import Carrito from "./Carrito/Carrito"

const CarritoUI = () => {
  const { cartList, vaciarCarrito, total$ } = useCartContext()
  
return (
    <div>
        { cartList.length === 0?
          <div className="d-flex flex-wrap justify-content-center">
            <h1 className="col-12 text-center mt-5">Tu carrito esta vacio</h1>
            <Link 
              className="btn btn-primary "
              to={"/"}>
              Ver listado de productos
            </Link>
          </div>
        :
          <>
            <Carrito/>

            <div className="col-12 text-center mt-5 fw-bolder fs-1"> El total es de : {total$} U$D </div>
            
            <ContactForm />

            <div className="d-flex justify-content-center col-12 m-5">
              <Button
                className="btn btn-danger"
                onClick={vaciarCarrito}
                >Vaciar Carrito
              </Button>
            </div>
          </>
        }
    </div>
  )
}

export default CarritoUI