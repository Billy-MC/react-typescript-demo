import { Name } from '../types/Person.types';

type PersonsListProps = {
	//array props
	names: Name[];
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
