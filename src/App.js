import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'A JavaScript', body: 'D  Description'},
        {id: 2, title: 'B JavaScript', body: 'B Description'},
        {id: 3, title: 'D JavaScript', body: 'A Description'},
        {id: 4, title: 'C JavaScript', body: 'C Description'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                <PostList remove={removePost} post={sortedAndSearchedPosts} title={'List'}/>
            }

        </div>
    )
}

export default App;
