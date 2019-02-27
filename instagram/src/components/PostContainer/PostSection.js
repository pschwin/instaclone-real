import React from 'react';
import Post from './Post';


const PostContainer = props => {
  return (
    <div>
      {props.postData.map((post, i) => {
        return (
          <div className='postContainer' key={i}>
            <Post post={post} />  
          </div>
        )
      })}
    </div>
  )
}

export default PostContainer;