import React, { FC } from 'react'
import ImageShow from './ImageShow'

interface ImageListI{
	UrlList: string[]
}

const ImageList : FC<ImageListI> = ({UrlList})  => {
  return (
	
	<div>
		{UrlList.map(el => 
			<ImageShow key={el} src={el}/>
		)}
	</div>
  )
}

export default ImageList