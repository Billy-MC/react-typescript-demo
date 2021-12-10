type ListProps<T> = {
	// items: string[] | number[];
	items: T[];

	// onClick: (value: string | number) => void;
	onClick: (value: T) => void;
};

// export const List = ({ items, onClick }: ListProps) => {
// export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
// export const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
export const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
	return (
		<div>
			<h2>List of items</h2>
			{items.map((item, index) => {
				return (
					<div key={item.id} onClick={() => onClick(item)}>
						{item}
					</div>
				);
			})}
		</div>
	);
};
