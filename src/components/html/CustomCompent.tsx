//可以reuse a component prop type BUT don't have access to the type itself!
//This is "Extract prop types" of an existing component

import { Greet } from '../Greet';

export const CustomCompent = (props: React.ComponentProps<typeof Greet>) => {
	return <div>{props.isLoggedIn}</div>;
};
