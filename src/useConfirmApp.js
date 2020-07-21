import React, { useState, useEffect, useRef } from 'react';

const useConfirm = (message, onConfirm, onCancel) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }
  return confirmAction
}

function useConfirmApp() {
  const deleteWord = () => console.log("Deleting the word...")
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWord, abort)
  return (
   <div className="App">
      <h1>Hello World</h1>
      <button onClick={ confirmDelete }>Delete the word</button>
    </div> 
  )
}

export default useConfirmApp;
