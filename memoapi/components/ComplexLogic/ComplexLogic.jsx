import React, { memo } from 'react'

function ComplexLogic({text}) {
    console.log('performing complex logic')
  return (
    <div>ComplexLogic</div>
  )
}

export default memo(ComplexLogic)