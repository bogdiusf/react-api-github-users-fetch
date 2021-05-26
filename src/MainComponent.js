import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import DisplayInfo from './DisplayInfo';

function MainInfo() {

    const [inputUrl, setinputUrl] = useState('')
    const [git, setGit] = useState(null)
    const [displayState, setdisplayState] = useState(false)
    const url = "https://api.github.com/users/" + inputUrl;



    const getData = async () => {
        await axios.get(url)
            .then(response => setGit(response.data), setdisplayState(true), console.log(displayState))
            .catch(error => console.log(error))
    };

    // if git has info -> pass git values to fullName and imgUrl, else -> pass empty strings
    const fullName = git ? git.name : ''; 
    const imgUrl = git ? git.avatar_url : '';

    return (
        <div>
            <div className="header-wrapper">
                <h1>Fetch GitHub user data</h1>
                <input type="text" onChange={(event) => { setinputUrl(event.target.value) }} />
                <button onClick={getData}>Get API data</button>
            </div>

            <div className="wrapper">
                <DisplayInfo url={imgUrl} fullName={fullName} state={displayState}/>  {/* state -> sending displayState as prop to DisplayInfo.js */}
            </div>
        </div>
    );

}

export default MainInfo