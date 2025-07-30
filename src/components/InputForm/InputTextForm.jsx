import Form from 'react-bootstrap/Form';

function InputTextForm({name, type, placeholder, value, onChange}) {
  return (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{ fontWeight: "400" }} >{name}</Form.Label>
        <Form.Control name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </Form.Group>
  );
}

export default InputTextForm;