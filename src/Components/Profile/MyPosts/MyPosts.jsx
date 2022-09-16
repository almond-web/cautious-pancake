

import React from 'react';
import m from './MyPosts.module.css'
import Post from '../Post/Post'


const MyPosts = () => {
    let postData = [{id:1, message:'My first post', likes: '10'}, {id:2, message:'My second post', likes: '5'}]
    let newArrayPost = postData.map(post=><Post message={post.message} likesAmounts={post.likes} />)
    return (
        <div className={m.descriptionBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={m.item}>
                {newArrayPost}
            </div>
        </div>
    )
}

export default MyPosts