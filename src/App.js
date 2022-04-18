import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
        {id: 4, title: 'JavaScript', body: 'Description'}
    ])
    const [title, setTitle] = useState('')
    const addNewPost = (event) => {
        event.preventDefault()
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <MyInput type="text" placeholder="Description"/>
                <MyButton onClick={addNewPost}>Add post</MyButton>
            </form>
            <PostList post={post} title={'List'}/>
        </div>
    )
}

export default App;
