//wrap html elements and add your own types & logic in react

//omit keyword is important when wrapping html element
//omit takes an object type and removes the specified properties
//children就會無左React.ReactNode type

type ButtonProps = {
	variant: 'primary' | 'secondary';
	children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
	return (
		<button className={`class-with${variant}`} {...rest}>
			{children}
		</button>
	);
};
