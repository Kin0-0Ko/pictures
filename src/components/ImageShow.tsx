import React, { FC } from 'react'

interface ImageShowI {
	src: string;
}

const ImageShow : FC<ImageShowI> = ({src}) => {
  return (
	<img src={src} alt="" width={250} height={200}/>
  )
}

export default ImageShow