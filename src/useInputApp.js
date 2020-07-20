import React from 'react';
import useInput from "./useInput"

function useInputApp() {
  const maxLen = (value) => (
    value.length <= 10 && !value.includes("@")
  )

  const name = useInput("Mr.", maxLen)

  return (
   <div className="App">
     <h1>Hello World</h1>
     {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
     <input placeholder="Name" { ...name } />
   </div> 
  )
}

export default useInputApp;
