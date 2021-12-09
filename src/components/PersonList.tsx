type PersonsListProps = {
	//array props
	names: {
		first: string;
		last: string;
	}[];
};

export const PersonList = (props: PersonsListProps) => {
	return (
		<div>
			{props.names.map(name => (
				<h2 key={name.first}>
					{name.first} {name.last}
				</h2>
			))}
		</div>
	);
};
