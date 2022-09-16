

import React from 'react';
import m from './MyPosts.module.css'
import Post from '../Post/Post'

const MyPosts = (props) => {
        let newArrayPost = props.posts.map(post=><Post message={post.message} likesAmounts={post.likes} />)
        let newPostText = React.createRef();
        let addNewPost = ()=> {
            debugger;
            let text = newPostText.current.value;
             props.addPost(text);
            };
    return (
        <div className={m.descriptionBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={m.item}>
                {newArrayPost}
            </div>
        </div>
    )
}

export default MyPosts