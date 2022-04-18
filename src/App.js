import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
        {id: 4, title: 'JavaScript', body: 'Description'}
    ])
    return (
        <div className="App">
            <PostList post={post} title={'List'}/>
        </div>
    )
}

export default App;
