type InputProps = {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

//can destructure props when defining the component
//use props to access the different properties on an object,
//we can opt to destructure
export const Input = ({ value, handleChange }: InputProps) => {
	// export const Input = (props: InputProps) => {
	//2種做法都可以
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	};
	return <input type='text' value={value} onChange={handleChange} />;
	// return <input type='text' value={props.value} onChange={props.handleChange} />;
};
