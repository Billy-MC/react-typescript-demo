//step 1 import useState
import { useState } from 'react';

export const LoggedIn = () => {
	//step 2 set the useState initial
	//因為ts inference 足夠聰明地infer what type of initial vale, 在這個case, false 是boolean, 所以this state is boolean
	//React.dispatch, React.SetStateAction 都可以用作set type of state
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	//setp4 define the handler functions
	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<button onChange={handleLogin}>Login</button>
			<button onChange={handleLogout}>Logout</button>
			{/* step 3  conditionally render the test inside the tag */}
			<div>User in {isLoggedIn ? 'logged in' : 'logged out'}</div>
		</div>
	);
};
