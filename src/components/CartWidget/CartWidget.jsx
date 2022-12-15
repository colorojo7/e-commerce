import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Carrito_btn() {
  return (
    <Button variant="primary">
      Carrito <Badge bg="secondary">1</Badge>
      <span className="visually-hidden"></span>
    </Button>
  );
}

export default Carrito_btn;