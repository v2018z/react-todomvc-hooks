export const reducer = (state, action) => {
	const {
		id,
		text,
		visibilityFilter: newVisibilityFilter,
	} = action.payload || { id: undefined, text: undefined };

	const { todos, visibilityFilter } = state;

	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: [
					{
						id: Math.random().toString(16).substring(2),
						completed: false,
						text,
					},
					...todos,
				],
				visibilityFilter,
			};
		case 'DELETE_TODO':
			return {
				todos: todos.filter((todo) => todo.id !== id),
				visibilityFilter,
			};
		case 'EDIT_TODO':
			return {
				todos: todos.map((todo) => {
					if (todo.id === id) {
						return {
							...todo,
							text,
						};
					}
					return todo;
				}),
				visibilityFilter,
			};
		case 'COMPLETE_TODO':
			return {
				todos: todos.map((todo) =>
					todo.id === id ? { ...todo, completed: true } : todo
				),
				visibilityFilter,
			};
		case 'CLEAR_COMPLETED':
			return {
				todos: todos.filter((todo) => !todo.completed),
				visibilityFilter,
			};
		case 'SET_VISIBILITY':
			return {
				todos: [...todos],
				visibilityFilter: newVisibilityFilter,
			};
		default: {
			return state;
		}
	}
};
