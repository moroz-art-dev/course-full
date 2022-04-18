import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
        {id: 4, title: 'JavaScript', body: 'Description'}
    ])
    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>List</h1>
            {post.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    )
}

export default App;
