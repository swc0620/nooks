import React, { useState, useEffect, useRef } from 'react';

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine)
  const handleChange = () => {
    onChange(navigator.onLine)
    setStatus(navigator.onLine)
  }

  useEffect(() => {
    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)
    return () => {
      window.addEventListener("online", handleChange)
      window.addEventListener("offline", handleChange)
    }
  }, [])
  return status
}

function useNetworkApp() {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline")
  }
  const online = useNetwork(handleNetworkChange)
  return (
   <div className="App">
      <h1>Hello World</h1>
      <h1>{ online ? "OnLine" : "OffLine"}</h1>
    </div> 
  )
}

export default useNetworkApp;
