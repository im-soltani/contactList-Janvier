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
  import axios from "axios"
  import { useDispatch } from "react-redux";
import { editContact } from '../redux/actions';
function EditModal({contact}) {
   const[modal,setModal]=useState(false)
   const[name,setName]=useState(contact.name)
   const[email,setEmail]=useState(contact.email)
   const[phone,setPhone]=useState(contact.phone)
   const [image, setImage] = useState("");
   const [uploading, setUploading] = useState(false);
const dispatch=useDispatch()
const toggle=()=>{
setModal(!modal)
}
const editt=()=>{
  const newContact={name,email,phone,image}
dispatch(editContact(contact._id,newContact))
toggle()
}  
const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  setUploading(true);
  axios
    .post("/api/uploads", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      setImage(response.data);
      setUploading(false);
    })
    .catch((err) => {
      console.log(err);
      setUploading(false);
    });
};
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
          <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"
                    
                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
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