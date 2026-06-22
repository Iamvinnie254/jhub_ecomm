'use client'

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false
        });
    }, [])

    return null;

}

export default AOSInit;