
import './App.css'

function App() {
const inputChange = (e) => {
    console.log(e.target.value)
}

  return (
    <>
      <input type="text" onChange={inputChange} />
    </>
  )
}

export default App
