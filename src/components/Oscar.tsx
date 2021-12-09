//another variant of chilren props, 一個children 套另一個Children
//想像同層sbling 互相交流
type OscarProps = {
	children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>;
};
