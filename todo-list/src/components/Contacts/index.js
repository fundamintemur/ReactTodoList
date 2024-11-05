import {useState,useEffect} from 'react'
import Search from './Search'
import List from './List'
import Footer from './Footer'
function Contacts() {
  const [contact,setContact]=useState([]);
  useEffect=(()=>{
    console.log(contact);
  },[contact])
  
  return (
    <div>
      <Search addContact={setContact} contact={contact}/>
      <List contact={contact}/>
      <Footer/>
    </div>
  )
}

export default Contacts
