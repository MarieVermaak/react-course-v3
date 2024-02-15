import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello(); // when we invoke a function inside a component = initial render AND rerender

  useEffect( ()=> {
    console.log('Hello');
  }, []); // An empty dependency array (only runs once) helps us tell react when things need to run i.e this runs only on the initial render
          // async functions returns promise and use effect is not ok with that
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
