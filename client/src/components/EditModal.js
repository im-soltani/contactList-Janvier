import React,{useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  import { useDispatch } from "react-redux";
import { editContact } from '../redux/actions';
function EditModal({contact}) {
   const[modal,setModal]=useState(false)
   const[name,setName]=useState(contact.name)
   const[email,setEmail]=useState(contact.email)
   const[phone,setPhone]=useState(contact.phone)
const dispatch=useDispatch()
const toggle=()=>{
setModal(!modal)
}
const editt=()=>{
  const newContact={name,email,phone}
dispatch(editContact(contact._id,newContact))
toggle()
}  
  return (
    <div>
    <Button color="danger"  onClick={toggle}>
      edit contact{" "}
    </Button>
    <Modal isOpen={modal}>
      <ModalHeader >edit modal</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
      onChange={(e)=>setEmail(e.target.value)}
     value={email}
           
              type="email"
              name="email"
              id="exampleEmail"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">name</Label>
            <Input
     
     onChange={(e)=>setName(e.target.value)}
     value={name}
              type="text"
              name="password"
              id="examplePassword"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">phone</Label>
            <Input
          onChange={(e)=>setPhone(e.target.value)}
          value={phone}
              type="text"
              name="password"
              id="examplePassword"
            
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={editt} >
          save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default EditModal