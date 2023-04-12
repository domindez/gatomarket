import Image from 'next/image'
import React from 'react'

const PostImg = ({ src, float } : {src:string, float:string}) => {
  return (
    <Image
      className={
      float === 'right'
        ? 'post-img float right'
        : float === 'left'
          ? 'post-img float left'
          : 'post-img'
      }
      src={require(`../img/${src}.jpg`)} width={800} height={300} alt={src}
      quality={100}
    />
  )
}

export default PostImg
