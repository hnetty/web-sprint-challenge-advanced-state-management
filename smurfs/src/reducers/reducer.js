import {
    POST_SMURF_SUCCESS,
    POST_SMURF_START
} from '../actions/action';

const initialState =  {
    isLoading: false,
    smurfs: [],
    error: ""
};

export const reducer = ( state = initialState, action) => {

    switch(action.type) {
        case POST_SMURF_START:
            console.log('POST_START works')
            return{
                ...state,
                isLoading: true
            };
        case POST_SMURF_SUCCESS:
            console.log('POST_SUCCESS works')
            console.log(action.payload[0])
            return{
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ""
            };
        default:
            return state;
    }
}