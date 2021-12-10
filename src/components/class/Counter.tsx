import { Component } from 'react';
// 2step process to change to ts
/* The count value is 5 */

// step 1: define the props and state type
type CounterProps = {
	message: string;
};
type CounterState = {
	count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
	state = {
		count: 0,
	};

	handleClick = () => {
		this.setState(preState => ({ count: preState.count + 1 }));
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Increment</button>
				{this.props.message} {this.state.count}
			</div>
		);
	}
}
