import React, { useState, useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const element = useRef()
  useEffect(() => {
  // console.log(element.current)
    // componenetDidMout, componenetWillUpdate
    if (element.current) {
      element.current.addEventListener("click", onClick)
    }
    // if you return a function in useEffect, it willbe called when componentWillUnmount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  return element
}

function useClickApp() {
  const sayHello = () => console.log("say Hello")
  const title = useClick(sayHello)
  return (
   <div className="App">
      <h1>Hello World</h1>
      <h1 ref={ title }>Click Me</h1>
   </div> 
  )
}

export default useClickApp;
