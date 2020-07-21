import React, { useState, useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  return { ref: element, style: { opacity: 0 } }
}

function useFadeInApp() {
  const fadeInH1 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(5, 10)
  return (
   <div className="App">
      <h1>Hello World</h1>
      <h1 { ...fadeInH1 }>Fade In!</h1>
      <p {...fadeInP}>Lorem ipsum</p>
    </div> 
  )
}

export default useFadeInApp;
