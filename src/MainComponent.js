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
            .then(response => setGit(response.data))
            .catch(error => console.log(error))

        setdisplayState(true);

    };


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
                <DisplayInfo url={imgUrl} fullName={fullName} state={displayState} />
            </div>
        </div>
    );

}

export default MainInfo