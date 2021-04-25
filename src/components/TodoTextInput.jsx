import React, { useState } from 'react';
import classnames from 'classnames';

export const TodoTextInput = ({
	todoText = '',
	newTodo,
	placeholder,
	onSave,
	editing,
}) => {
	const [text, setText] = useState(todoText);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleBlur = (e) => {
		if (!newTodo) {
			onSave(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		const inputText = e.target.value.trim();
		if (e.which === 13) {
			onSave(inputText);
			if (newTodo) {
				setText('');
			}
		}
	};

	return (
		<input
			className={classnames({
				'new-todo': newTodo,
				edit: editing,
			})}
			type="text"
			placeholder={placeholder}
			autoFocus
			value={text}
			onBlur={handleBlur}
			onChange={handleChange}
			onKeyDown={handleSubmit}
		/>
	);
};
