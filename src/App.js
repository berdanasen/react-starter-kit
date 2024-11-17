import { useRef, forwardRef } from "react"

// function Input(props, ref) {
//   return <input ref={ref} type="text" {...props} />
// }

// Input = forwardRef(Input)

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />
})

function App () {

  const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <h1>useRef() - forwardRef()</h1>
      <Input title="test" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
  )
}

export default App;