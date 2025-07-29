import Form from 'react-bootstrap/Form';

function InputDate({ nom, onChange }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ textTransform: "uppercase", fontWeight: "700", fontSize: "0.8rem" }}>
        {nom}
      </Form.Label>
      <Form.Control 
        type="date" 
        onChange={(e) => onChange(e.target.value)} 
      />
    </Form.Group>
  );
}

export default InputDate;