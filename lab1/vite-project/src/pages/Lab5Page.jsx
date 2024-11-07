import { useReducer, useEffect } from 'react';
import useFetch from '../data/useFetch';
import TableHeader from '../components/TableHeader';
import TableDataReducer from '../data/TableDataReducer';

const Lab5Page = () => {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    
    const createInitialTableData = () => {
        return posts.map((p) => ({
            user: users.find((u) => u.id === p.userId),
            post: p,
            comments: comments.filter((c) => c.postId === p.id),
        }));
    };

    const [tableData, dispatch] = useReducer(TableDataReducer, []);

    
    useEffect(() => {
        if (posts.length && users.length && comments.length) {
            const initialData = createInitialTableData();
            dispatch({ type: 'INITIALIZE', payload: initialData });
        }
    }, [posts, users, comments]);

    
    const handleSortUser = (order) => {
        dispatch({ type: 'SORT_BY_USER', order, initialData: createInitialTableData() });
    };

    const handleSortTitle = (order) => {
        dispatch({ type: 'SORT_BY_TITLE', order, initialData: createInitialTableData() });
    };

    const handleSortComments = (order) => {
        dispatch({ type: 'SORT_BY_COMMENTS', order, initialData: createInitialTableData() });
    };

    return (
        <div>
            <h2>Lab5Page</h2>
            <table className="table">
                <TableHeader
                    onSortUser={handleSortUser}
                    onSortTitle={handleSortTitle}
                    onSortComments={handleSortComments}
                />
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.user?.name || 'Unknown'}</td>
                            <td>{data.post.title}</td>
                            <td>{data.comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab5Page;
