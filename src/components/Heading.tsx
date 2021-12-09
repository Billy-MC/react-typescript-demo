//定義 children  type (children props)
type HeadingProps = {
	children: string;
};

export const Heading = (props: HeadingProps) => {
	return <h2>{props.children}</h2>;
};
