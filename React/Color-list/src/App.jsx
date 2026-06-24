import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const fruits = [
    {name: 'Apple', isfruit: true, id: 1},
    {name: 'Carrot', isfruit: false, id: 2},
    {name: 'Banana', isfruit: true, id: 3},
    {name: 'Broccoli', isfruit: false, id: 4},
  ]
  const listItems = fruits.map((fruit) => {
    return (
      <li
        key={fruit.id}
        style = {{color: fruit.isfruit ? 'orange' : 'green'}}
      >
        {fruit.name}
      </li>
  )}
  )
  return (
    <>
      <ol>{listItems}</ol>
    </>
  );
}

export default App
