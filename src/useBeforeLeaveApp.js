import React, { useState, useEffect, useRef } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event
    if (clientY <= 0) {
      onBefore()
    }
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle)
    return () => document.removeEventListener("mouseleave", handle)
  }, [])
}

function useBeforeLeaveApp() {
  const begForLife = () => console.log("Please don't leave")
  useBeforeLeave(begForLife)
  return (
   <div className="App">
      <h1>Hello World</h1>
    </div> 
  )
}

export default useBeforeLeaveApp;
