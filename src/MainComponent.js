import React, { useState } from 'react';
import axios from 'axios';
import DisplayInfo from './DisplayInfo';
import "antd/dist/antd.css";
import './style.css';
import { Button } from "antd";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function MainInfo() {

    const [inputUrl, setinputUrl] = useState('')
    const [git, setGit] = useState([])
    const [displayState, setdisplayState] = useState(false)

    const url = "https://api.github.com/users/" + inputUrl;

    const [state, setState] = useState(
        { loadings: [] }
    )
    // const fetchData = async () => {
    //     if (!inputUrl) {
    //         setdisplayState(false)
    //         return
    //     }

    //     try {
    //         const response = await axios.get(url)
    //         setGit([...git, response.data])
    //         setdisplayState(true)
    //     }
    //     catch (e) { console.log(e) }

    //     setinputUrl('')
    // }

    const enterLoading = (index) => {

        setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;
            return {
                loadings: newLoadings
            };

        });

        setTimeout(async () => {

            if (!inputUrl) {
                setdisplayState(false)
                return
            }
            else {
                try {
                    const response = await axios.get(url)
                    setGit([...git, response.data])
                    setdisplayState(true)
                    
                    
                }
                catch (e) { console.log(e) }
                
                setinputUrl('')
            }
            setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;
                
                return {
                    loadings: newLoadings
                };
            });
        }, 500);
    };
    
    return (
        <div className="mainWrapper">
            <div className="header-wrapper">
                <h1>Fetch GitHub user data</h1>
                <Input autoSize  placeholder="Type username" prefix={<UserOutlined />} value={inputUrl} onChange={(event) => { setinputUrl(event.target.value) }}
                style={{width: '100%'}}/>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Button type="primary" loading={state.loadings[0]}
                        onClick={() => {
                            if (inputUrl !== '') {
                                enterLoading(0)
                            }
                            else {
                                alert('Input empty')
                            }
                        }}>Get API data</Button>
                    <Button type="danger" loading={state.loadings[1]} onClick={() => setGit([])}>Clear all users</Button>
                </div>
            </div>

            <div className="wrapper">
                {git.map((item) => (
                    <div className="penis" key={item.id}>
                        <DisplayInfo url={item.avatar_url} fullName={item.name} id={item.id} state={displayState} setGit={setGit} user={git}/>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default MainInfo
