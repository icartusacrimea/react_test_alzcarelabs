import { FETCH_IMAGES } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_IMAGES:
			return [ action.payload.data.photos.photo ];
	}
	return state;
}