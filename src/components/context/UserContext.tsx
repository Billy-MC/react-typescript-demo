//step 1 create new context
import { useState, createContext } from 'react';

export type AuthUser = {
	name: string;
	email: string;
};

//step 2 create the component that provides the user context value

type UserContextProviderProps = {
	children: React.ReactNode;
};

type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as UserContextType);
//第一步要maintain a user state whose value will be null if the user is loggedout
//and will be an object if the user is logged in
//must use the useState hook
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
