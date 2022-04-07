import {useState} from 'react'
function App() {

  const [value, setValue]= useState(0);

  const onIncrement = () =>{
    setValue(value+1)
  }

  const onDecrement = () =>{
    setValue(value-1)
  }

  const onReset = () =>{
    setValue(0)
  }

  return (
    <div className='main'>
      <div className='center'>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <div className='btn'>
      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement} disabled={value===0}>Decrease</button>
      <button onClick={onReset} disabled={value===0}>Reset</button>
    </div>
    </div>
    </div>

  )
}

export default App;
