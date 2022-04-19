import React, {useMemo, useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'A JavaScript', body: 'D  Description'},
        {id: 2, title: 'B JavaScript', body: 'B Description'},
        {id: 3, title: 'D JavaScript', body: 'A Description'},
        {id: 4, title: 'C JavaScript', body: 'C Description'}
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPost = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPost])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search'
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue="Sorting by"
                    options={[
                        {value: 'title', name: 'Name'},
                        {value: 'body', name: 'Description'}
                    ]}/>
            </div>
            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} post={sortedAndSearchedPosts} title={'List'}/>
                :
                <h1 style={{textAlign: "center"}}>Posts not found!</h1>
            }

        </div>
    )
}

export default App;
