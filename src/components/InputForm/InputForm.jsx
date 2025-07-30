import Form from 'react-bootstrap/Form';

function InputText({nom, type, placeholder, value, onChange}) {
  return (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{ fontWeight: "400" }} >{nom}</Form.Label>
        <Form.Control name={nom} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </Form.Group>
  );
}

export default InputText;