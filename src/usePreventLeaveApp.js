import React, { useState, useEffect, useRef } from 'react';

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = ""
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listener)
  const disablePrevent = () => window.removeEventListener("beforeunload", listener)
  return { enablePrevent, disablePrevent }
}

function usePreventLeaveApp() {
  const { enablePrevent, disablePrevent } = usePreventLeave()
  return (
   <div className="App">
      <h1>Hello World</h1>
      <button onClick={ enablePrevent }>Protect</button>
      <button onClick={ disablePrevent }>Unprotect</button>
    </div> 
  )
}

export default usePreventLeaveApp;
