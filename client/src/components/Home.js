import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import { Button } from "reactstrap";
function Home() {
  return (
    <div> 
      <Link to="/list">
    <Button color="info">Contact list</Button>
    </Link>
<Link to="/addContact">
    <Button color="info">Add Contact </Button>
    </Link>
 </div>
  )
}

export default Home