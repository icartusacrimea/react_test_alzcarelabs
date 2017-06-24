import axios from 'axios';

const API_KEY = 'bd32e7740f6dbcf8d3a2c7482249512e';

export const FETCH_IMAGES = 'FETCH_IMAGES';

export function fetchImages(tag) {

	const url = `https://api.flickr.com/services/rest/?api_key=${API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${tag}`;
	const request = axios.get(url);

	return {
		type: FETCH_IMAGES,
		payload: request
	};
}

// https://api.flickr.com/services/rest/?api_key=bd32e7740f6dbcf8d3a2c7482249512e&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=cat