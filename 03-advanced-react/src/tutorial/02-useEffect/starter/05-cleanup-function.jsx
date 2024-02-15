import { useEffect, useState } from "react";





const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return <div>
    <button className="btn" onClick={() => setToggle(!toggle)}>
      Toggle component 
    </button>
    {toggle && <RandomComponent/> }
  </div>
};


const RandomComponent = () => {
  useEffect(() => {
const intID= setInterval(() => { // keeps running

}, 1000) 
return () => {
clearInterval(intID); // clears and stop it running when the component isnt displayed runs when the component unmounts
} 
  }, []);
  return <h1>Hello There</h1>
}


export default CleanupFunction;
