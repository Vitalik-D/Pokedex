import * as actionTypes from '../ActionTypes'

const reducer = ( state = {}, action:any ) => {
    switch ( action.type ) {
        case actionTypes.COUNTER:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
