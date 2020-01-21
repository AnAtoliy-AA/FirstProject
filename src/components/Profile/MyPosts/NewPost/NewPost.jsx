import React from 'react';
import s from './NewPost.module.css';


const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>New post</button>
            </div>
        </div>
    )
}

export default NewPost;