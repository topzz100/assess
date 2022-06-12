import {useState} from 'react'
import Square from './Square'
import './square.css'

const BigSquare = () => {
 

  return (
    <div className="bigSquare">
      <div className="content">
        {
          [...Array(49)].map((a, i) => (
            <Square/>
          ))
        }
        <Square/>
      </div>
    </div>
  )
}

export default BigSquare