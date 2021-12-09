//click event props
// type ButtonProps = {
// 	handleClick: () => void;
// };

// another variant of this click handler is when you need the event passed in to your click handler
//rely on a react type
//<> is more specific by saying this is a button click, 可以睇哂成個event有D咩值 value 之類
type ButtonProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
	return <button onClick={event => props.handleClick(event, 1)}>Click</button>;
};
