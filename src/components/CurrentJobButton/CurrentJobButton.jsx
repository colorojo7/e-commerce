import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CurrentJobButton() {
  return (
    <Button variant="primary">
      Current Job <Badge bg="secondary">1</Badge>
      <span className="visually-hidden"></span>
    </Button>
  );
}

export default CurrentJobButton;