import React,{ useEffect, useState} from 'react'

export default function UseScroll() {
     const [scrollPosition, setScrollPosition] = useState(null)

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }
    useEffect(() => {
     document.addEventListener("scroll",handleScroll);
     return () => document.removeEventListener("scroll",handleScroll)
    }, [])


    return scrollPosition
}



