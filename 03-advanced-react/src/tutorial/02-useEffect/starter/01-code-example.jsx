import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    //be careful, you will have an infinite loop
    // don't update the state INSIDE of the function because it already updates when we invoke the function outside 
    setValue(value + 1) // do not update the state like this 
  };
  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
