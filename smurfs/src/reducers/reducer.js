import {
    GET_SMURF_SUCCESS,
    GET_SMURF_START,
    POST_SMURF_SUCCESS
} from '../actions/action';

export const initialState =  {
    isLoading: false,
    smurfs: [],
    error: ""
};

export const reducer = ( state = initialState, action) => {

    switch(action.type) {
        case GET_SMURF_START:
            console.log('GET_SMURF_START works')
            return{
                ...state,
                isLoading: true
            };
        case GET_SMURF_SUCCESS:
            console.log('GET_SMURF works')
            console.log(action.payload)
            return{
                ...state,
                isLoading: false,
                smurfs:  action.payload,
                error: "",  
            };
        case POST_SMURF_SUCCESS:
            console.log('Smurf was submitted')
            return{
                ...state,
                smurfs: action.payload
            };
        default:
            return state;
    }
}