import Form from 'react-bootstrap/Form';

function InputGoup({ville, nom}) {
  return (
    <>
        <h5>{nom}</h5>
        <Form.Select aria-label="Default select example">
        {ville.map((vil, index) => (
            <option value={vil} key={index}>{vil}</option>
        ))}
        </Form.Select>
    </>
  );
}

export default InputGoup;