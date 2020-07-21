import React, { useState, useEffect, useRef } from 'react';

function useRefApp() {
  // reference is the way to select any part of component. Every component in React has reference
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000)
  return (
   <div className="App">
      <h1>Hello World</h1>
      <input ref={ potato } placeholder="la" />
   </div> 
  )
}

export default useRefApp;
