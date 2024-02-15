import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000 );

  };
  return (
    <div>
      <h1>{value}</h1>
      <button type="buttons" className="btn" onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseStateGotcha;
// doesn't update the latest value it's one behind when you log it in the dev tools
// use the setValue function to set the new state
// setValue(() => {
//  const newState = currentState +1 
//  return newState
//})
