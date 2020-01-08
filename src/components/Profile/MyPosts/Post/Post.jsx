import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg'/>
            {props.message}
            <div>
                <span>like </span>
                {props.quantity}
            </div>
        </div>
    )
}

export default Post;