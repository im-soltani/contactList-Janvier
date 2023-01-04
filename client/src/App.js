
import './App.css';
import ContactList from "./components/ContactList"
import {Routes,Route,Link} from "react-router-dom"
import { Button } from "reactstrap";
import Home from './components/Home';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/list" element={<ContactList/>} />
    <Route  path="/addContact" element={<AddForm/>}/>
   </Routes>

    </div>
  );
}

export default App;
