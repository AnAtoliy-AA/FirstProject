import React from 'react';
import s from './NewPost.module.css';


const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
             props.addPost(text);
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>New post</button>
            </div>
        </div>
    )
}

export default NewPost;