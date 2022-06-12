import { useState } from 'react'
import './square.css'

const Square = () => {
  const pickColor = ['green', 'yellow', 'purple']
  const [color, setColor] = useState('red')
  const [show, setShow] = useState(false)
  const handleColor = (e) => {
    console.log(e.target.value)
    setColor(e.target.value)
  }
  return (
    <div className='square' style={{backgroundColor: color}} onClick= {setShow(true)}>
      {
        show &&
          <select defaultValue='Choose' name="" id="" onChange={handleColor} >
            <option value="">Choose</option>
            {
              pickColor.map((c, i) => (
              <option key= {i} >{c}</option>
               )
              )
            } 
       
          </select>
      }
      
    </div>
  )
}

export default Square