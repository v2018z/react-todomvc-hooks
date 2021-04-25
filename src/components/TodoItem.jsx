import React, { useState } from 'react';
import classnames from 'classnames';
import { useTodo } from '../useTodo';
import { TodoTextInput } from './TodoTextInput';

export const TodoItem = ({ todo }) => {
	const [editing, setEditing] = useState(false);

	const [, dispatch] = useTodo();

	const deleteTodo = (id, text) => {
		dispatch({
			type: 'DELETE_TODO',
			payload: { id, text },
		});
	};

	const editTodo = (id, text) => {
		dispatch({
			type: 'EDIT_TODO',
			payload: { id, text },
		});
	};

	const completeTodo = (id, text) => {
		dispatch({
			type: 'COMPLETE_TODO',
			payload: { id, text },
		});
	};

	const handleDoubleClick = () => setEditing(true);

	const handleSave = (id, text) => {
		if (text.trim().length === 0) {
			deleteTodo(id, text);
		} else {
			editTodo(id, text);
		}
		setEditing(false);
	};

	return (
		<li
			className={classnames({
				editing,
				completed: todo.completed,
			})}
		>
			{editing ? (
				<TodoTextInput
					todoText={todo.text}
					editing={editing}
					onSave={(text) => handleSave(todo.id, text)}
				/>
			) : (
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						onChange={() => completeTodo(todo.id)}
					/>
					<label onDoubleClick={handleDoubleClick}>{todo.text}</label>
					<button
						type="button"
						className="destroy"
						onClick={() => deleteTodo(todo.id)}
					/>
				</div>
			)}
		</li>
	);
};
