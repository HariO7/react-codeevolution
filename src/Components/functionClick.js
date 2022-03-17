import React from 'react'

function functionClick() {
    function handleClick(){
        console.log('clicked');
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default functionClick