import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    > img {
        width: 350px;
        height: 350px;
    }
`;

function DisplayInfo(props) {
    return (
        <Wrapper style={!props.state ? { display: 'none' } : { display: 'block' }}>
            <img src={props.url} alt="profileImage" />
            <h3>{props.fullName}</h3>
        </Wrapper>
    )
}

export default DisplayInfo