import React from 'react'
import { render } from 'react-dom'
import './style.css'
const Greeting = () => {
    return(
        <>
        <h1>Hello From React</h1>
        <div id="image">
        </div>
    </>
    )
  
}




render(
    <Greeting />,
    document.getElementById('target')
)