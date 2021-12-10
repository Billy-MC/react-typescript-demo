import { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

//step 1 create new context
export const ThemeContext = createContext(theme);

//step 2 create the theme context provider
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	return <ThemeContext.Provider value={theme}> {children}</ThemeContext.Provider>;
};
