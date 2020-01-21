import React from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map((messages) => <Post message={messages.message} id={messages.id} quantity = {messages.likesCount}/>);

       return (
        <div className={s.postBlock}>
            <NewPost dispatch={props.dispatch}/>
            <div className={s.postsBlock}>
              {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;