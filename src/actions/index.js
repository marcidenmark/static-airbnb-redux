//in actions folder
import flats from '../flats';

export function setFlats() {
	//fake db usually api call here.
	return {
		type: 'SET_FLATS',
		payload: flats
	};
}
