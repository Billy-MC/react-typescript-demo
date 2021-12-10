//this is a component that controls whether a user can view a component OR not based on whether they're logged in
import { Login } from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
	isLoggedIn: boolean;
	component: React.ComponentType<ProfileProps>;
};

//two destructured props
export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name='Billy' />;
	} else {
		return <Login />;
	}
};
