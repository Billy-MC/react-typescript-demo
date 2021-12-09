type PersonProps = {
	//Object props
	name: {
		first: string;
		last: string;
	};
};

export const Person = (props: PersonProps) => {
	return (
		<div>
			{props.name.first} {props.name.last}
		</div>
	);
};
