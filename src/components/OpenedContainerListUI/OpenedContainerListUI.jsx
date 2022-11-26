import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const OpenedContainerUI = () => {
  return (
   <div>
        <Alert key="info" variant="info" className='text-center'>
            Opened Container List
        </Alert>
        <Table id="openedContainers" striped bordered hover className='text-center'>
        <thead>
            <tr className='d-flex'>
                <th className="col-3">JOB#</th>
                <th className="col-3">Date</th>
                <th className="col-4">Container</th>
                <th className="col-2">Total folios</th>
            </tr>
        </thead>
        <tbody>
            <tr className='d-flex'>
            <td className="col-3">081229</td>
            <td className="col-3">13/11/2022</td>
            <td className="col-4">MSKU123456</td>
            <td className="col-2">14</td>
            </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default OpenedContainerUI