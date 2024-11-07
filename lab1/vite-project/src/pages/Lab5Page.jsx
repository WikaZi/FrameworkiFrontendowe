import { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion} from 'react-bootstrap';
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
                            
                            <td>
                                <Link to={`/lab5/users/${data.user.id}`}>{data.user?.name || 'Unknown'}</Link>
                            </td>
                            
                            
                            <td>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{data.post.title}</Accordion.Header>
                                        <Accordion.Body>{data.post.body}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </td>
                            
                            
                            <td>
                                <Link to={`/lab5/posts/${data.post.id}/comments`}>
                                    {data.comments.length}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab5Page;
