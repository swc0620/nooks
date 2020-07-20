import React, { useState } from 'react';
import useInput from "./useInput"

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return ;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

function App() {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
   <div className="App">
      <h1>Hello World</h1>
      { content.map((section, index) => <button onClick={() => changeItem(index)}>{ section.tab }</button>) }
      <div>
        { currentItem.content }
      </div>
   </div> 
  )
}

export default App;
