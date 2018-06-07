export default function(state, action) {
	if (state === undefined) {
		return [];
	}
	//switch is the return statement
	switch (action.type) { case 'SET_FLATS':
     	return action.payload;
		default:
      	return state;
  	}
}
// line 1 action coming from action folder.
//a reducer is a function
//	1. takes the state and
//	2. computes and returns the new state.
//	export default makes it readable in flatsReducer
//	You don't need to name your reducer function.
		// export default function (state, action) {
		// 	if (state === undefined) {
		// 		return []
		// 	}
		// }


//also possible this way:
// const flatsReducer = (state, action) => { if (state === undefined) {
// 		(Reducer initialisation)
// return []; }
// 		(TODO: handle some actions)
// };
// export default flatsReducer;
