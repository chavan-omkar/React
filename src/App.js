const { useState, useEffect } = require("react");

 export default function App(){

  /*
  this are the states used so runtime availability of the data 
  advice and count are used to get while setAdvice and setCount is used to set the values of the state
  */
  const[advice,setAdvice] = useState("")
  const[count,setCount] = useState(0);

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  // The empty array [] means that the effect does not depend on any values from the component scope.
  useEffect(function(){
    getAdvice();
  },[]);

  /*
   <Message count ={count} here we have used props.
   we are passing the count as a property  of props to message component.
   */
  return(
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count ={count} />
    </div>
  );
}

function Message(props){
 return (
   <p>You have read <strong>{props.count}</strong> piece of advice already</p>
 );
}