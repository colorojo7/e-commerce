import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const AfterAdd = () => {
  return (
    <>
        <CartWidget/>
        <Link to={"/"}>
            <button
                className="btn btn-outline-primary m-3"
            >
             Seguir comprando   
            </button>
        </Link>
    </>
  )
}

export default AfterAdd