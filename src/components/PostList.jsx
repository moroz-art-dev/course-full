import React from 'react';
import PostItem from "./PostItem";

const PostList = ({post, title, remove}) => {
    if(!post.length){
        return  (
            <h1 style={{textAlign: "center"}}>Posts not found!</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {post.map((post, index) =>
                <PostItem remove={remove} number={index + 1} key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;