import React from 'react';
import { Link as FilterLink } from './Link';

const FILTER_TITLES = ['All', 'Active', 'Completed'];

export const Footer = ({ completedCount, activeCount, onClearCompleted }) => (
	<footer className="footer">
		<span className="todo-count">
			<strong>{activeCount || 'No'}</strong>{' '}
			{activeCount === 1 ? 'item' : 'items'} left
		</span>
		<ul className="filters">
			{FILTER_TITLES.map((filter) => (
				<li key={filter}>
					<FilterLink filter={filter}>{filter}</FilterLink>
				</li>
			))}
		</ul>
		{!!completedCount && (
			<button
				type="button"
				className="clear-completed"
				onClick={onClearCompleted}
			>
				Clear Completed
			</button>
		)}
	</footer>
);
