import {
  Form,
  Container, Label, Input,
  Button,
} from 'reactstrap';
import { useFormik } from 'formik';

const FormComponent = (props) => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <Container>
    <Form onSubmit={formik.handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <Label for="inputEmail4">Email</Label>
          <Input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email} />
        </div>
        <div className="form-group col-md-6">
          <Label for="inputPassword4">Password</Label>
          <Input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
        <Label for="inputAddress">Address</Label>
        <Input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="form-group">
        <Label for="inputAddress2">Address 2</Label>
        <Input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <Label for="inputCity">City</Label>
          <Input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <Label for="inputState">State</Label>
          <select id="inputState" className="form-control">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <Label for="inputZip">Zip</Label>
          <Input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
  <div className="form-group">
    <div className="form-check">
      <Input className="form-check-input" type="checkbox" id="gridCheck" />
      <Label className="form-check-Label" for="gridCheck">
        Check me out
      </Label>
    </div>
  </div>
  <Button type="submit" color="primary">Sign in</Button>
</Form>
</Container>
  ); 
}

export default FormComponent;