import React from 'react';
import classnames from 'classnames';
import { useTodo } from '../useTodo';

export const Link = ({ children, filter }) => {
	const [{ visibilityFilter }, dispatch] = useTodo();

	const setVisibility = () => {
		dispatch({
			type: 'SET_VISIBILITY',
			payload: {
				visibilityFilter: filter,
			},
		});
	};

	return (
		<a
			href="#"
			type="button"
			className={classnames({
				selected: filter === visibilityFilter,
			})}
			style={{ cursor: 'pointer' }}
			onClick={setVisibility}
		>
			{children}
		</a>
	);
};
