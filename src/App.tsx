import './App.css';
// import { Counter } from './components/class/Counter';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Container } from './components/Container';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Box } from './components/context/Box';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profile';
// import { List } from './components/generics/List';
// import { RandomNumber } from './components/restriction/RandomNumber';
// import { Toast } from './components/templateliterals/Toast';
// import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

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
			</Oscar>  */}

			{/* <Button
				handleClick={(event, id) => {
					console.log('Button clicked', event, id);
				}}
			/> */}

			{/* <Input value='' handleChange={event => console.log(event)} /> */}

			{/* <Container styles={{ color: 'blue', border: '3px solid black', padding: '1rem' }} /> */}
			{/* step 3 useContext, wrap the box component with the provider */}
			{/* <ThemeContextProvider>
				<Box />
			</ThemeContextProvider> */}
			{/* <UserContextProvider>
				<User />
			</UserContextProvider> */}
			{/* <Counter message='The Count value is' /> */}
			{/* <Private isLoggedIn={true} component={Profile} /> */}
			{/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={item => console.log(item)} />
			<List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
			{/* <List
				items={[
					{
						id: 123,
						first: 'Billy',
						last: 'Chui',
					},
					{
						id: 345,
						first: 'Yanmi',
						last: 'Lau',
					},
				]}
				onClick={item => console.log(item)}
			/> */}
			{/* <RandomNumber value={10} isPositive /> */}
			{/* <Toast position='left-top' /> */}
			{/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}> */}
			{/* <div>Primary Button</div> */}
			{/* 因為restricted the type of children just String */}
			{/* Primary Button
			</CustomButton> */}
			<Text as='h1' size='lg'>
				Heading
			</Text>
			<Text as='p' size='md'>
				Paragraph
			</Text>
			<Text as='label' size='sm' color='secondary'>
				Label
			</Text>
		</div>
	);
}

export default App;
