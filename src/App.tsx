import React, { useState } from "react"
import "./App.css"

interface test {
  [a: string]: string
}

function App() {
  const inputValue: test = { a: "", b: "", c: "" }

  const [state, setState] = useState({ inputValue, option: [{ timestamp: "", value: inputValue }] })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, inputValue: { ...state.inputValue, [e.target.id]: e.target.value } })
  }
  const handleClick = () => {
    setState({ ...state, option: [...state.option, { timestamp: new Date().toString(), value: state.inputValue }] })
  }
  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, inputValue: state.option.find(d => d.timestamp === e.target.value)?.value ?? inputValue })
  }
  return (
    <div className="App">
      <input value={state.inputValue.a} id="a" onChange={handleChange} />
      <input value={state.inputValue.b} id="b" onChange={handleChange} />
      <input value={state.inputValue.c} id="c" onChange={handleChange} />

      <button onClick={handleClick}>save</button>
      <br />
      <select onChange={handleOption}>
        {state.option.map(d => (
          <option value={d.timestamp}>{d.timestamp}</option>
        ))}
      </select>
    </div>
  )
}

export default App
