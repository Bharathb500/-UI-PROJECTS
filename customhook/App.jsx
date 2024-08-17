import React from 'react'
import UseMedia from './UseMedia'

function App() {
    const {isMobile, isTablet, isDesktop} = UseMedia();
    console.log(isMobile,isTablet, isDesktop )
  return (
    <>
    
    {isMobile && <b>mob</b>}
    {isTablet && <b>tab</b>}
    {isDesktop && <b>desktop</b>}
    </>
  )
}

export default App