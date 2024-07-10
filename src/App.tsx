import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageShow from './components/ImageShow';
import ImageList from './components/ImageList';

function App() {

	const [Urls, setUrls] = useState<any[]>([]);

	const handleSubmit = async (arg: string) => {
		let url : any[] = [];

		(await searchImages(arg)).forEach(el => {
			url.push(el.urls.full)
		})
		setUrls(url)
	}
	console.log(Urls);
	
  return (
    <div className="App">
		<SearchBar onSubmit={handleSubmit}/>
		<ImageList UrlList={Urls}/>
    </div>
  );
}

export default App;
