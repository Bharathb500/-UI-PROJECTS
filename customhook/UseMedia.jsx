import { useEffect, useState } from "react"

function UseMedia() {
    const [media, setmedia] = useState({isMobile: false, isTablet: false, isDesktop: false})

    const windowResize = () => {

        const mobileMatches = window.matchMedia('(max-width: 375px)').matches
        const tabletMatches = window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches
        const desktopMatches = window.matchMedia('(min-width: 1200px)').matches;
        setmedia({isMobile: mobileMatches, isTablet: tabletMatches, isDesktop: desktopMatches})
    }   

    useEffect(()=>{
        windowResize();
        window.addEventListener('resize', windowResize)
    },[])

    return media
}

export default UseMedia