import { useState } from 'react';
import useFetch from '../data/useFetch';  
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; 
import TableHeader from '../components/TableHeader';  

const Lab5Page = () => {
    
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    
    const tableData = posts.map((p) => {
        return {
            user: users.find((u) => u.id === p.userId),
            post: p,
            comments: comments.filter((c) => c.postId === p.id),
        };
    });

    
    const [sortedPosts, setSortedPosts] = useState(tableData);

   
    const sortPosts = (order) => {
        let sorted = [...tableData];
        if (order === 'asc') {
            sorted.sort((a, b) => a.post.title.localeCompare(b.post.title)); 
        } else if (order === 'desc') {
            sorted.sort((a, b) => b.post.title.localeCompare(a.post.title)); 
        } else {
            sorted = tableData; 
        }
        setSortedPosts(sorted);
    };

    return (
        <div>
            <h1>Lab 5 - Data from JSONPlaceholder</h1>
            <Link to="/lab4">Go Back to Previous Page</Link>

            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By Title
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => sortPosts('asc')}>Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortPosts('desc')}>Descending</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortPosts(null)}>Natural Order</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

           
            <table className="table mt-4">
                <TableHeader />  
                <tbody>
                    {sortedPosts.map((item, index) => (
                        <tr key={index}>
                            <td>{item.user ? item.user.name : "Unknown"}</td>
                            <td>{item.post.title}</td>
                            <td>{item.comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab5Page;
