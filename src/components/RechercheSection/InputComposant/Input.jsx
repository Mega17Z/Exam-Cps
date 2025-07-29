import Form from 'react-bootstrap/Form';

function InputGoup({ville, nom, onChange}) {
  return (
    <>
        <h6 style={{ textTransform: "uppercase", fontWeight: "700", fontSize: "0.8rem" }}>{nom}</h6>
        <Form.Select aria-label="Default select example" onChange={(e) => onChange(e.target.value)}>
        {ville.map((vil, index) => (
            <option value={vil} key={index}>{vil}</option>
        ))}
        </Form.Select>
    </>
  );
}

export default InputGoup;