import React,{useState} from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import{useDispatch} from "react-redux"
import { addContact } from '../redux/actions';
import { Navigate } from "react-router-dom";

function AddForm() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [cancel, setCancel] = useState(false);

  const dispatch=useDispatch()

  const handleAdd=()=>{
    const newContact={name,email,phone,image}
    dispatch(addContact(newContact))
 setCancel(!cancel);
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

      <Button onClick={handleAdd}>Add contact</Button>
      <Button  onClick={()=>setCancel(!cancel)}>cancel</Button>
    </Form>
</div>

)}
</>
  )
}

export default AddForm