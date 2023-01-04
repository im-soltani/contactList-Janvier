import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import{useDispatch} from "react-redux"
import { addContact } from '../redux/actions';
import { Navigate } from "react-router-dom";

function AddForm() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [cancel, setCancel] = useState(false);

  const dispatch=useDispatch()

  const handleAdd=()=>{
    const newContact={name,email,phone}
    dispatch(addContact(newContact))
 setCancel(!cancel);
  }
  return (
    <>
    {cancel ? (
      <Navigate to="/list" />
    ) : (
  <div style={{ margin: "100px" }}>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
onChange={(e)=>setEmail(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">name</Label>
        <Input
 onChange={(e)=>setName(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">phone</Label>
        <Input
onChange={(e)=>setPhone(e.target.value)}
      
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <Button onClick={handleAdd}>Add contact</Button>
      <Button  onClick={()=>setCancel(!cancel)}>cancel</Button>
    </Form>
</div>

)}
</>
  )
}

export default AddForm