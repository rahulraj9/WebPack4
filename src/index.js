import React from 'react'
import {render} from 'react-dom'
import './style.css'
const Greeting =()=><h1>Hello From React</h1>

render(
    <Greeting/>,
    document.getElementById('target')
)