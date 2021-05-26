import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    > img {
        width: 350px;
        height: 350px;
    }
    text-align: center;
`;

function DisplayInfo(props) {
    return (
        <div>
            { (props.state) ? <Wrapper>
                <img src={props.url} alt="profileImage" />
                <h3>{props.fullName}</h3>
            </Wrapper>
            : <div>Cacat</div>}
            {/* {props.msg && <div>Please fetch a valid user</div>} */}
        </div>
    )
}

export default DisplayInfo