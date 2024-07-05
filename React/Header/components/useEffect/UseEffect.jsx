import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [first, setFirst] = useState(0)

    const clickHandler = () => {
        setFirst(first + 1)
    }
    useEffect(() => {
      console.log('component rendered first time')
    }, [])
    
  return (
    <div onClick={clickHandler}>UseEffect</div>
  )
}

export default UseEffect