import  { useState } from 'react';
import useFetch from '../data/useFetch';  
import { Link } from 'react-router-dom';
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

    
    const sortPostsByTitle = (order) => {
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

    
    const sortPostsByUser = (order) => {
        let sorted = [...tableData];
        if (order === 'asc') {
            sorted.sort((a, b) => a.user.name.localeCompare(b.user.name)); 
        } else if (order === 'desc') {
            sorted.sort((a, b) => b.user.name.localeCompare(a.user.name)); 
        } else {
            sorted = tableData; 
        }
        setSortedPosts(sorted);
    };

    
    const sortPostsByComments = (order) => {
        let sorted = [...tableData];
        if (order === 'asc') {
            sorted.sort((a, b) => a.comments.length - b.comments.length); 
        } else if (order === 'desc') {
            sorted.sort((a, b) => b.comments.length - a.comments.length); 
        } else {
            sorted = tableData; 
        }
        setSortedPosts(sorted);
    };

    return (
        <div className="container mt-4">
            <h1>Lab 5 - Data from JSONPlaceholder</h1>
            <Link to="/lab4" className="btn btn-secondary mb-4">Go Back to Previous Page</Link>

           
           
            
            <table className="table table-bordered">
                <TableHeader 
                onSortUser={sortPostsByUser} 
                onSortTitle={sortPostsByTitle} 
                onSortComments={sortPostsByComments} 
                />
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
