"use client"

import {useState, useEffect} from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import darkMode from "../../../public/assets/icons/darkmode.png"
import lightMode from "../../../public/assets/icons/lightmode.png"
const ThemeSwitcher = (props:any) => {
    const [ mounted, setMounted ] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    },[])

    if (!mounted){
        return null;
    }

    return (
        <div className="flex justify-end">
             {theme === 'dark' ? 
                <div className="flex pb-8">
                    <Image src={lightMode} alt="light mode"/>
                     <button onClick={()=>setTheme("light")} >Light Mode</button>
                </div>
               
               
                : (
                    <div className="flex pb-8">
                     <Image src={darkMode} alt="dark mode"  />
                    <button onClick={()=>setTheme("dark")} className="pl-2">Dark Mode</button>
                    </div>
                    )}
            {/* THE CURRENT THEME IS : {theme} */}
            
            
        </div>
    )
}

export default ThemeSwitcher