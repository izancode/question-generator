'use client';
import {useTheme} from 'next-themes';
const ThemeToggle = () => {
 const {theme,setTheme}=useTheme();
 console.log(theme)
 const toggleTheme = ()=>{
    setTheme(theme ==='dark'?'light':'dark');
 }
 return (
    <button className="" onClick={toggleTheme}>
        {theme ==='dark'?'dark mode':'light mode'}
    </button>
  )
}

export default ThemeToggle
