import React from 'react';
import CommentSection from '../CommentContainer/CommentSection';
import './Post.css';


const Post = props => {
  return (
    <div className='post'>
      <div className='opUserInfo'>
        <img src={props.posted.thumbnailUrl} alt='Avatar' />
        <h3>{props.posted.username}</h3>
      </div>
      <img src={props.posted.imageUrl} alt='Original Post'/>
      <CommentSection 
        comments={props.posted.comments}
        likes={props.posted.likes}
      />
    </div>
  )
}

export default Post;