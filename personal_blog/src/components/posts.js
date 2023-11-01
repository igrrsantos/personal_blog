import React from 'react'

function Posts(props) {
  return (
    <div>
      <div>Aqui estão os posts</div>
      {props?.posts?.map((post) => {
        console.log(props)
        return (
          <div key={post.id}>
            <h2>{post.content}</h2>
          </div>
        )


      })}
    </div>
  )
}

export default Posts
