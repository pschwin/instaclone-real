import React from 'react';
import Post from './Post';
import './Post.css';


const PostContainer = props => {
  return (
    <div>
      {props.postData.map((post, i) => {
        return (
          <div className='postContainer' key={i}>
            <Post posted={post} />  
          </div>
        )
      })}
    </div>
  )
}

export default PostContainer;