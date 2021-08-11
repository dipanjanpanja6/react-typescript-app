import React, { useState } from "react"
import "./App.css"

function App() {
  const [state, setState] = useState({ inputValue: "", option: [{ timestamp: "", value: "" }] })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, inputValue: e.target.value })
  }
  const handleClick = () => {
    setState({ ...state, option: [...state.option, { timestamp: new Date().toString(), value: state.inputValue }] })
  }
  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, inputValue: e.target.value })
  }
  return (
    <div className="App">
      <input value={state.inputValue} onChange={handleChange} />
      <button onClick={handleClick}>save</button>
      <br />
      <select onChange={handleOption}>
        {state.option.map(d => (
          <option value={d.value}>{d.timestamp}</option>
        ))}
      </select>
    </div>
  )
}

export default App
