import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

function Counter() {
  const [count, setCount] = useState(0);
  function Button({onClick, children}) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <div onClick={() => alert("You clicked parent")}>
      <h1>Numbering: {count}</h1>
      <h2>Counter: 
      <Button onClick={() => {setTimeout(() => setCount(count + 1), 2000);}}>
        Increase
      </Button></h2>
    </div>
  );
}

export default Counter
