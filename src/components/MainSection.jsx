import React from 'react';
import { Footer } from './Footer';
import { TodoList } from './TodoList';
import { useTodo } from '../useTodo';

const getCompletedCount = (todos) =>
	todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

const MainSection = () => {
	const [{ todos, visibilityFilter }, dispatch] = useTodo();
	const todosCount = todos.length;
	const completedCount = getCompletedCount(todos);

	const clearCompleted = () => {
		dispatch({
			type: 'CLEAR_COMPLETED',
		});
	};

	return (
		<section className="main">
			<span>
				<input className="toggle-all" type="checkbox" />
				<label />
			</span>
			<TodoList todos={todos} visibilityFilter={visibilityFilter} />
			<Footer
				completedCount={completedCount}
				activeCount={todosCount - completedCount}
				onClearCompleted={clearCompleted}
			/>
		</section>
	);
};

export default MainSection;
