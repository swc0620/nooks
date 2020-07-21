import React, { useState, useEffect, useRef } from 'react';

const useNotification = (title, options) => {
  if(!("Notification" in window)) {
    return ;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options)
        } else {
          return ;
        }
      })
    } else {
      new Notification(title, options)
    }
  }
  return fireNotif
}

function useNotificationApp() {
  const triggerNotif = useNotification(
    "Can I steal your kimchi?", 
    { body: "I love kimchi,, don't you?" }
  )
  return (
   <div className="App">
      <h1>Hello World</h1>
      <button onClick={ triggerNotif }>Notify</button>
    </div>
  )
}

export default useNotificationApp;
