export default function(state, action) {
	if (state === undefined) {
		return null;
	}
	// debugger
	if (action.type === 'SELECT_FLAT') {
		return action.payload;
	} else {
		return state;
	}
}
