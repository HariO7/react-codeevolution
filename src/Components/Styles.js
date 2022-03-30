import React from 'react'
import './style.css'
function Styles(props) {
    const heading = {
        color: 'aqua',
        fontSize: '78px'
    }
  return (
    <div>
        <h1 className='error'>INLINE</h1>
        <h1 style={heading}>Styles</h1>
    </div>
  )
}

export default Styles