//useState is great for simple state values
//useReducer is great for complex state logic where the next state depends on the previous state

import { useReducer } from 'react';

type CounterState = {
	count: number;
};

//this feature is called descriminated unions in TypeScript
//recommended approach for typing reducer functions
type UpdateAction = {
	type: 'increment' | 'decrement';
	payload: number;
};
type ResetAction = {
	type: 'reset';
};

type CountAction = UpdateAction | ResetAction;

// type CountAction = {
// 	type: 'increment' | 'decrement' | 'reset';
// 	payload?: number;
// };

const initialState = { count: 0 };

function reducer(state: CounterState, action: CountAction) {
	switch (action.type) {
		case 'increment': //<--type
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - action.payload };
		case 'reset':
			return initialState;
		default:
			return state;
	}
}

export const Count = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			Count:{state.count}
			<button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
			<button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</>
	);
};
