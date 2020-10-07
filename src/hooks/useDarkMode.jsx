import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialvalue) => {
    const [darkMode, setDarkMode] = useLocalStorage("toggleDarkMode", initialvalue);
   
    return [darkMode, setDarkMode];
}