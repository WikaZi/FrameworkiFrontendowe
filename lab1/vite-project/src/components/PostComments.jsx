import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostComments = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>Post Details</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p><strong>{comment.name}</strong> ({comment.email})</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;
