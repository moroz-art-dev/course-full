import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'A JavaScript', body: 'D  Description'},
        {id: 2, title: 'B JavaScript', body: 'B Description'},
        {id: 3, title: 'D JavaScript', body: 'A Description'},
        {id: 4, title: 'C JavaScript', body: 'C Description'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostLoading, setIsPostLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostLoading(true)
        const posts = await PostService.getAll()
        setPosts(posts)
        setIsPostLoading(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>GET</button>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost} post={sortedAndSearchedPosts} title={'List'}/>
            }

        </div>
    )
}

export default App;
