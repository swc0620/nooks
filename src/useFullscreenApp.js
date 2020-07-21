import React, { useState, useEffect, useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef()
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen()
      if (callback) {
        callback(true)
      }
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
  }
  return { element, triggerFull, exitFull }
}

function useFullscreenApp() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small")
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS)
  return (
   <div className="App" style={{ height: "1000vh"}}>
      <div ref={ element }>
        <h1>Hello World</h1>
        <img 
          src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <button onClick={ triggerFull }>Make fullscreen</button>
        <button onClick={ exitFull }>Exit fullscreen</button>
      </div>
    </div>
  )
}

export default useFullscreenApp;
