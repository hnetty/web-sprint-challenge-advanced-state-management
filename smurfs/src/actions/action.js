import axios from 'axios';

export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_START = 'POST_SMURF_START';

export const postSmurfs = () => {

    return dispatch => {

        dispatch({type: POST_SMURF_START});

        axios
            .get("http://localhost:3333/smurfs")
            .then( res => {
                console.log(res.data[0])
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
                
            })

        // axios
        //     .post("http://localhost:3333/smurfs")
        //     .then( res => (
        //         console.log(res)
        //     ))

    }
}