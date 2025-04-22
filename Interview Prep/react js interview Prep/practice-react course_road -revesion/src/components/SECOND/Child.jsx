import React from 'react'

function Child({incCounter}) {
  return (
    <div>
        <button onClick={incCounter}>inc</button>
    </div>
  )
}

export default Child