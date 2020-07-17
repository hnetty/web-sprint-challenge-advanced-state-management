import axios from 'axios';

export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_START = 'GET_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';

export const getSmurfs = () => {

    return dispatch => {

        dispatch({type: GET_SMURF_START});

        axios
            .get("http://localhost:3333/smurfs")
            .then( res => {
                console.log(res.data)
                dispatch({ type: GET_SMURF_SUCCESS, payload: res.data})       
            })
    }
}

export const postSmurfs = (newSmurf) => {

    console.log('Post smurf was called');

    return dispatch => {

        dispatch({type: POST_SMURF_SUCCESS})

        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then( res => {
                console.log(res)
                
            })
    }

}