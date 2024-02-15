const ErrorExample = () => {

  let number = 0
  
  return <div>
    {number}
    <button onClick={() => {
      counter++
    }}>
      Click me
    </button>
  </div>;
};

export default ErrorExample;
