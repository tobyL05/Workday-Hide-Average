import { useEffect, useState } from 'react';
import './App.css'
import { Switch } from '@mui/material'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {

  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    chrome.storage.sync.get(["hideAverage"]).then((val) => {
      if (val["hideAverage"]) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    })
  },[])

  const toggleHidden = () => {
    setHidden(!hidden);
    console.log(hidden)
    chrome.runtime.sendMessage({
      message: "toggle"
    })
  }

  return (
    <div className="App">
      <header>
        <h3 className="headerText">Hide your Workday average</h3>
      </header>
      <div className="body">
        <p className="hidetext">Hide?</p>
        <Switch className="toggleHide" {...label} onChange={toggleHidden} checked={hidden}/>
      </div>
      <div className="footer">
        <p>Hover over the blank "Cumulative Average" section to reveal your average</p>
      </div>
    </div>
  )
}

export default App
