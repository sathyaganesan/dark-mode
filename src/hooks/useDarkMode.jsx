import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialvalue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialvalue);
   
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);

        return [darkMode, toggleMode];
    }
}