import Card from 'react-bootstrap/Card';
import { useCartContext } from '../../../../../context/Context';

const CartItem = (p) => {
  const{deleteItem} = useCartContext()

  return (
        <Card key={p.id} className="mb-2">
            
            <Card.Body className='d-flex flex-wrap'>
              
                <img src={p.img} alt={p.titulo} className="col-3"></img>
                <div className="col-9 d-flex align-items-center">
                  <Card.Title className='col-4 text-center'>  {p.titulo} -  </Card.Title>
                  <Card.Text className='col-3'>U$D {p.precio} x  </Card.Text>
                  <Card.Text className='col-3'>Cantidad:  <span className='fw-bolder'>{p.cantidad}</span>  </Card.Text>
                  <button className='col-2 self-aligne-end btn btn-outline-danger ' onClick={()=>deleteItem(p.id)}>
                    Eliminar
                  </button>
                </div>
            </Card.Body>
        </Card>
 
  )
}

export default CartItem