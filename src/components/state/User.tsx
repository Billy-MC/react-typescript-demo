//當 useState 的initial value is only known at the future point in time
//eg. 當user visit our app,they are not lgged in by default
//最常見的方法是initialize useState 為空白(null)
import { useState } from 'react';

type AuthUser = {
	name: string;
	email: string;
};

export const User = () => {
	const [user, setUser] = useState<AuthUser>({} as AuthUser);

	const handleLogin = () => {
		setUser({
			name: 'Billy',
			email: 'billy@hotmail.com',
		});
		// };
		// const handleLogout = () => {
		// 	setUser(null);
		// };

		//type assertion
		//to let typescript know that the user is always of type AuthUser, and won't be null
		//use as<--key word
		return (
			<div>
				<button onClick={handleLogin}>Login</button>
				{/* <button onClick={handleLogout}>Logout</button> */}
				{/* 因為user可以係null, 所以 變成一個optilonal type */}
				{/* <div> User name is {user?.name}</div> */}
				{/* <div> User email is {user?.email}</div> */}

				<div> User name is {user.name}</div>
				<div> User email is {user.email}</div>
			</div>
		);
	};
};
