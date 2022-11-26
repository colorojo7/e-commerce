import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

const FormNewOpenContainer = () => {
  return (
    <div>
      <Alert key="info" variant="info" className='text-center'>
        New Container Job
        </Alert>
      <Form id="formNewOpenContainer" className="container p-2">
        <Form.Group className="mb-3" controlId="formJobNumber">
          <Form.Label>JOB #</Form.Label>
          <Form.Control type="text" placeholder="Enter job number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContainerNumber">
          <Form.Label>Container Number</Form.Label>
          <Form.Control type="text" placeholder="Enter container number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContainerSize">
          <Form.Label>Container Size</Form.Label>
          <Form.Select>
            <option value="0" defaultValue={"0"}>Sellect size</option>
            <option value="40">40' (big container)</option>
            <option value="20">20' (small container)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContainerSealIn">
          <Form.Label>Container Seal In</Form.Label>
          <Form.Control type="text" placeholder="Enter container seal In" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJobTeam">
          <Form.Label>Job Team</Form.Label>
          <Form.Control type="text" placeholder="Enter all team members" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormNewOpenContainer;
/* 
<form  id="formNewOpenContainer" className="container p-2">
                    <div className="mb-3">
                        <label for="jobNumber" className="form-label">JOB #</label>
                        <input type="text" className="form-control" id="jobNumber"/>
                    </div>
                    <div className="mb-3">
                      <label for="containerNumber" className="form-label">Container Number</label>
                      <input type="text" className="form-control" id="containerNumber" aria-describedby="containerNumberHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="containerSize" className="form-label">Select Size</label>
                      <select id="containerSize" className="form-select">
                          <option value="0" defaultValue={"0"}>Sellect one</option>
                          <option value="40" id="containerSize40">40' (big container)</option>
                          <option value="20" id="containerSize20">20' (small container)</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label for="containerSealIn" className="form-label">Container Seal</label>
                      <input type="text" className="form-control" id="containerSealIn" aria-describedby="containerNumberHelp"/>
                      <div id="containerSealInHelp" className="form-text">The number of the seal was on before opening OR</div> 
                      <input type="checkbox" className="form-check-input" id="noSeanIn"/>
                      <label className="form-check-label" for="exampleCheck1">There was no seal before opening</label>
                    </div> 
                    <div className="mb-3">
                        <label for="jobTeam" className="form-label">Enter team names</label>
                        <input type="text" className="form-control" id="containerTeam" aria-describedby="jobTeamHelp"/>
                    </div>             
                    <input id="newJob"type="submit" className="btn btn-primary" value="Start"></input>
        </form>
        */
