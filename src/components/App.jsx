import React from 'react';
import Header from './Header';
import { TodoProvider } from '../TodoProvider';
import { reducer } from '../stores/reducer';
import MainSection from './MainSection';

const initialState = {
	todos: [
		{
			text: 'React hooks',
			completed: false,
			id: 0,
		},
		{
			text: 'Context4',
			completed: true,
			id: 1,
		},
	],
	visibilityFilter: 'All',
};

const App = () => (
	<TodoProvider initialState={initialState} reducer={reducer}>
		<div>
			<Header />
			<MainSection />
		</div>
	</TodoProvider>
);

export default App;
