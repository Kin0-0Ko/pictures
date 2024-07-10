import React, { FC, useState } from 'react'

interface SearchBarI{
	onSubmit: (arg: string) => void;
}


const SearchBar : FC<SearchBarI> = ({onSubmit}) => {

	const [val, setVal] = useState('')

	const handleSubmit = (e : any) => {
		e.preventDefault();
		onSubmit(val);
		
	}

  return (
	<div>
		<form onSubmit={handleSubmit}>
			<input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
		</form>
	</div>
  )
}

export default SearchBar