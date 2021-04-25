import React from 'react';
import { TodoTextInput } from './TodoTextInput';
import { useTodo } from '../useTodo';

const Header = () => {
	const [, dispatch] = useTodo();

	const onSave = (text) => {
		if (text.length > 0) {
			dispatch({
				type: 'ADD_TODO',
				payload: { text },
			});
		}
	};

	return (
		<header className="header">
			<h1>todos</h1>
			<TodoTextInput
				newTodo
				placeholder="What needs to be done?"
				onSave={onSave}
			/>
		</header>
	);
};

export default Header;
