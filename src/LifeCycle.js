import { useState } from "react"
import Test from "./Deneme"

function App () {

  const [show, setShow] = useState(false)

  return (
      <>
        <button onClick={() => setShow(show => !show)}>
          {show ? 'Gizle': 'Göster'}
        </button>
          {show && <Test />}
      </>
  )
}

export default App;