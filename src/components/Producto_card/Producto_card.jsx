
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Producto_card = (p) => {
  return (
    <Link to={`/detalle/${p.id}`} className="m-3 col-3">
        <Card key={p.id} >
            <Card.Img variant="top" src={p.img} />
            <Card.Body>
                <Card.Title> U$D  {p.precio} - </Card.Title>
                <Card.Text>
                    {p.titulo}
                </Card.Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Producto_card