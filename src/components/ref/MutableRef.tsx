import { useState, useRef, useEffect } from 'react';

//for mutable references specify the appropriate type line.7,10

export const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | null>(null);
	// const interValRef = useRef<number | undefined>(undefined);
	// OR

	const stropTimer = () => {
		if (interValRef.current) window.clearInterval(interValRef.current);
	};

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
		return () => {
			stropTimer();
		};
	}, []);

	return (
		<div>
			HookTimer - {timer} - <button onClick={() => stropTimer()}>Stop Timer</button>
		</div>
	);
};
