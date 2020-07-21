import React, { useState, useEffect } from 'react';

function sayHelloApp() {
  const sayHello = () => console.log("Hello")
  
  // 'useEffect' is equivalent of 'componentDidMount', 'componentWillUnmount' and 'componentWillUpdate'
  // useEffect(() => {
  //   sayHello();
  // })

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);

  // 'useEffect' take two element. First element is function to be activated. Second element is dependencies which means, if any value in dependecies changes, then useEffect will be activated.
  useEffect(sayHello, [number])

  return (
   <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
   </div> 
  )
}

export default sayHelloApp;
