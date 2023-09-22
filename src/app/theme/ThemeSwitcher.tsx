"use client"

import {useState, useEffect} from "react"
import { useTheme } from "next-themes"

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
            THE CURRENT THEME IS : {theme}
            <button onClick={()=>setTheme("light")} >Light Mode</button>
            <button onClick={()=>setTheme("dark")}>Dark Mode</button>
        </div>
    )
}

export default ThemeSwitcher