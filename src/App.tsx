import './App.css';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
	// const personName = {
	// 	first: 'Billy',
	// 	last: 'Chui',
	// };

	// const nameList = [
	// 	{
	// 		first: 'Billy',
	// 		last: 'Chui',
	// 	},
	// 	{
	// 		first: 'Yanmi',
	// 		last: 'Lau',
	// 	},
	// 	{
	// 		first: 'MinJu',
	// 		last: 'Kim',
	// 	},
	// 	{
	// 		first: 'Sakura',
	// 		last: 'Miyawaki',
	// 	},
	// ];

	return (
		<div className='App'>
			{/* <Greet name='Yanmi' messageCount={20} isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Status status='loading' />
			<Heading> Placeholer Text </Heading>
			<Oscar>
				<Heading>Oscar goes to Leonardo Dicpario</Heading>
			</Oscar> */}

			{/* <Button
				handleClick={(event, id) => {
					console.log('Button clicked', event, id);
				}}
			/>
			<Input value='' handleChange={event => console.log(event)} /> */}
			<Container styles={{ color: 'blue', border: '3px solid black', padding: '1rem' }} />
		</div>
	);
}

export default App;
