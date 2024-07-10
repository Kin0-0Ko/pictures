import axios from 'axios';


const searchImages = async (term : string): Promise<any[]> => {
	const res = await axios.get('https://api.unsplash.com/search/photos', {
	headers: {
		Authorization: 'Client-ID CnKM3TieuzH9VmDd-Wh6IlFxDGK6JdeKL8B0hMmbldk'
	},
	params: {
		query: term
	}
})
	
	return res.data.results;
}

export default searchImages;