import { createContext , useContext , useState , useEffect,  } from "react";

const themeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [ isDarkMode , setIsDarkMode ] = useState(()=>{
        return localStorage.getItem('theme') === 'dark'
    })


    const toggleDarkMode = () =>{
        setIsDarkMode((prevMode) =>!prevMode)
    }

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    },[isDarkMode])
    return (
       
        <themeContext.Provider value={{ isDarkMode , toggleDarkMode}}>
            {children}
        </themeContext.Provider>
        
    )
       
}

export const useTheme = () =>{
    return useContext(themeContext)
}