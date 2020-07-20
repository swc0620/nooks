import React, { useState } from 'react';

// 'react-hooks' way
// 'react-hooks' allows us to use functional programming
function countApp() {
  // 'useState' returns an array. First element is state, second element is the function to set state
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
   <div className="App">
     <h1>Hello World</h1>
     <h2>Start REACTing to see some magic happen!</h2>
     <h1>{ item }</h1>
     <button onClick={ decrementItem }>Decrement</button>
     <button onClick={ incrementItem }>Increment</button>
   </div> 
  )
}

// 'class component' way
class uglyApp extends React.Component {
  state = {
    item: 1
  }
  render() {
    const { item } = this.state;

    const incrementItem = () => {
      this.setState(current => {
        return {
          item: current.item + 1
        }
      })
    }

    const decrementItem = () => {
      this.setState(current => {
        return {
          item: current.item - 1
        }
      })
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>Start REACTing to see some magic happen!</h2>
        <h1>{ item }</h1>
        <button onClick={ this.decrementItem }>Decrement</button>
        <button onClick={ this.incrementItem }>Increment</button>
      </div> 
     )
  }
}

export default countApp;
