import {useState} from 'react';

function Search({addContact,contact}) {
  const[deger,setDeger]=useState("");
  const onChangeInput=(e)=>
  {
    setDeger(e.target.value);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    if(deger==""){
      return false;
    }
    addContact([...contact,deger]); 
    setDeger("");
  }
 
   return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input className="new-todo" value={deger} placeholder="What needs to be done?" onChange={onChangeInput} autoFocus />
         
        </form>
        <div className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label></div>

      </header>

    </div>
  )
}

export default Search
