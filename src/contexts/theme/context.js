import { useState, createContext } from 'react';

export const ThemeContext = createContext(); // create context for theme

export const ThemeContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('light');

    return (
        // wrapper with complex logic with state and its changers (value)
        <ThemeContext.Provider
            value={{
                theme, // current theme mode
                // theme mode changer
                changeTheme: () => {
                    const newValue = theme == 'light' ? 'dark' : 'light';
                    setTheme(newValue);
                    document.documentElement.setAttribute('data-theme', newValue); // change body attr
                }
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
