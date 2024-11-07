const TableDataReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return action.payload;

        case 'SORT_BY_USER':
            if (action.order === 'asc') {
                return [...state].sort((a, b) => a.user.name.localeCompare(b.user.name));
            } else if (action.order === 'desc') {
                return [...state].sort((a, b) => b.user.name.localeCompare(a.user.name));
            }
            return action.initialData;

        case 'SORT_BY_TITLE':
            if (action.order === 'asc') {
                return [...state].sort((a, b) => a.post.title.localeCompare(b.post.title));
            } else if (action.order === 'desc') {
                return [...state].sort((a, b) => b.post.title.localeCompare(a.post.title));
            }
            return action.initialData;

        case 'SORT_BY_COMMENTS':
            if (action.order === 'asc') {
                return [...state].sort((a, b) => a.comments.length - b.comments.length);
            } else if (action.order === 'desc') {
                return [...state].sort((a, b) => b.comments.length - a.comments.length);
            }
            return action.initialData;

        default:
            return state;
    }
};

export default TableDataReducer;
