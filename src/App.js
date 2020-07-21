import React, { useState, useEffect, useRef } from 'react';
import useAxios from "./useAxios"

function App() {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts.am/api/v2/list_movies.json" })
  return (
   <div className="App">
      <h1>Hello World</h1>
      <h1>{ data && data.status}</h1>
      <h2>{ loading && "Loading" }</h2>
      <button onClick={ refetch }>Refetch</button>
    </div>
  )
}

export default App;
