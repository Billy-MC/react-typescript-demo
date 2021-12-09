//當係optional props時, 加入?
type GreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
	//props 一定要(),  一定要定義props type
	//destructure 一個 被定義的type from props, and assign a default value
	const { messageCount = 0 } = props;
	return (
		<div>
			<h2>{props.isLoggedIn ? `Welcome ${props.name}, You have ${messageCount} unread messages` : 'Welcome Guest'}</h2>
		</div>
	);
};
