import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() =>{
        const handlePopState = () => {
            setCurrentPath((current) => current = window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);
        return() =>{
            window.removeEventListener('popstate', handlePopState)
        }
    }, []);

    const navigate = (to) => {
        if(to !== currentPath){
            window.history.pushState({}, '', to);
            setCurrentPath(to);
        }
    }
    return (
        <NavigationContext.Provider value={{navigate, currentPath}}>
            {children}
        </NavigationContext.Provider>
    )
};


export { NavigationProvider }
export default NavigationContext;