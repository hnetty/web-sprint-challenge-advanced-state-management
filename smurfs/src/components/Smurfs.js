import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { postSmurfs } from '../actions/action'

const Smurfs = props => {


    useEffect(() =>{
        props.postSmurfs();
    });

    console.log(props);

    return(
        <div>

            <form >
                <h4>Smurf Name</h4>
                    <input
                    type='text'
                    name='name'
                    value={props.name}
                    placeholder="Enter a smurf name"
                    />
                <h4>Smurf Height in cm</h4>
                    <input
                    type='text'
                    name='height'
                    value={props.height}
                    placeholder='Enter smurfs height'
                    />
                <h4>Smurf Age</h4>
                    <input
                    type='text'
                    name='age'
                    value={props.age}
                    placeholder='Enter smurfs age'
                    />
                    <br></br>
                    <br></br>

                    <button>Submit</button>
            </form>

            <br></br>
            <br></br>    

            {props.smurfs.map(people => (
                <div>
                    <h5>{people.name}</h5>
                    <p>{people.height}cm</p>
                    <p>{people.age}</p>
                </div>
            ))}


        </div>

    )

}

const mapStateToProps = state => {
    return{
        name: state.name,
        height: state.height,
        age: state.age
    };
};

export default connect(
    mapStateToProps, 
    { postSmurfs }
)(Smurfs);

