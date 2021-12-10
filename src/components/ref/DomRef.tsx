//for dom references scpecify the dom element type

import { useRef, useEffect } from 'react';
//use ref Hook to focus an input emelment when the component mounts

export const DomRef = () => {
	//value is stored n a constant call inputRef
	//if you are sure your reference is never be null when you access it
	//you can add the non-null assertion (null!) when invoking useRef
	//this allows ys to call focys without optional chaining
	//keep in mind when using the useRef hook for DOM references
	const inputRef = useRef<HTMLInputElement>(null!);
	//access the dom element in the useEffect hook to focus the input
	useEffect(() => {
		inputRef.current?.focus();
	}, []);
	//need to specify the type of the dom element, since input is the html element we are referencing
	return (
		<div>
			{/* input is HTML element */}
			<input type='text' ref={inputRef} />
		</div>
	);
};
