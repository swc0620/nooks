import React, { useState, useEffect, useRef } from 'react';

const useHover = (onHover) => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover)
    }
    return () => {
      element.current.removeEventListener("mouseenter", onHover)
    }
  }, [])
  return element
}

function useHoverApp() {
  const sayHello = () => console.log("say Hello")
  const title = useHover(sayHello)
  return (
   <div className="App">
      <h1>Hello World</h1>
      <h1 ref={ title }>Hover over Me</h1>
   </div> 
  )
}

export default useHoverApp;
