import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/Context';

function CartWidget() {
  const{totalQ} = useCartContext()
  return (
    <Link to={'/carrito'} className="btn btn-primary">
        Carrito <Badge bg="secondary">{totalQ>0 && totalQ}</Badge>
        <span className="visually-hidden"></span> 
    </Link>
  );
}

export default CartWidget;