import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, postSmurfs } from '../actions/action'

const Smurfs = props => {
    const [newSmurf, setNewSmurf] = useState({})

    useEffect(() =>{
        props.getSmurfs();
    }, []);

    console.log(props.smurfs);
    console.log(props.isLoading);


    const handleChanges = e => {
        console.log('test')
        setNewSmurf({newSmurf: e.target.value})
    }

    const submitSmurf = e => {
        e.preventDefault();

        const userSmurf = {...props.smurf, newSmurf}

        postSmurfs(userSmurf);
    }
    
    return(
        <React.Fragment>
        <div>

            <div>
                {props.isLoading && <h4>Loading...</h4>}
            </div>
            
            <br></br>
            <br></br> 

            <div>
            
                <div>
                    {props.smurfs.map(people => (
                        <div key={people.id}>
                            <h5>{people.name}</h5>
                            <p>{people.height}</p>
                            <p>{people.age}</p>
                        </div>
                    ))}
                </div>
        
            </div>

            <form >
                <h4>Smurf Name</h4>
                    <input
                    type='text'
                    name='name'
                    value={props.name}
                    onChange={handleChanges}
                    placeholder="Enter a smurf name"
                    />
                <h4>Smurf Height in cm</h4>
                    <input
                    type='text'
                    name='height'
                    value={props.height}
                    onChange={handleChanges}
                    placeholder='Enter smurfs height'
                    />
                <h4>Smurf Age</h4>
                    <input
                    type='text'
                    name='age'
                    value={props.age}
                    onChange={handleChanges}
                    placeholder='Enter smurfs age'
                    />
                    <br></br>
                    <br></br>

                    <button onSubmit={submitSmurf}>Submit</button>
            </form>       
        
        </div>
        </React.Fragment>
    )

}

const mapStateToProps = state => {
    console.log('This is smurf state', state)
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps, 
    { getSmurfs, postSmurfs }
)(Smurfs);

