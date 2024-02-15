import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'lola',
    age: 24,
    hobby: 'pet cats'
  });
  
  const displayPerson = () => {
    setPerson({ name: 'Tim', age: 55, hobby: 'ride bikes' });
  };

  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3> Loves to: {person.hobby}</h3>
    <button type="button" style={{ background: "pink ", marginTop: '2rem', height: '2rem', width: '6rem' }} className="btn" onClick={displayPerson}>show Tim</button>
  </>;
};

export default UseStateObject;
