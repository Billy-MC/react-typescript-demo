type StatusProps = {
	//union of string literals as the status type
	status: 'loading' | 'success' | 'error';
};
export const Status = (props: StatusProps) => {
	let message;
	if (props.status === 'loading') {
		message = 'Loading...';
	} else if (props.status === 'success') {
		message = 'Data fatced successfully!';
	} else if (props.status === 'error') {
		message = 'Error fatching data';
	}
	return (
		<div>
			<h2>Status - {message}</h2>
		</div>
	);
};
