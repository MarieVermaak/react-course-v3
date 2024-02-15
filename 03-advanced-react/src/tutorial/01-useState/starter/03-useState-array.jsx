import {data} from '../../../data';
import { useState } from 'react';


const UseStateArray = () => {

  const [people, setPeople] = useState(data)

  const removeItem= (id) => {
    const newPeople= people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  const clearAllItems= () => {
    setPeople([])

    
  }


  return <div>
    {people.map((person) => {
     const {id, name} = person
      return <div key={id}>
        <h4>{name}</h4>
        <button type="button" class="btn" onClick={() =>removeItem(id)}>remove</button>
      </div>
    })}
    <button type="button" style={{background:"pink ", marginTop:'2rem', height:'2rem', width:'6rem'}}className="btn" onClick={clearAllItems} >Clear</button>
  </div>
  
};

export default UseStateArray;
