import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    > img {
        width: 350px;
        height: 350px;
    }
    > .deleteButton {
        width: 50px;
        height: 30px;
    }
    > h3 {
        font-size: 25px;
        background-color: rgba(220,220,255,0.9)
    }
    text-align: center;
    border: 1px solid black;
    background-color: rgba(0,255,0,0.5);
    padding: 40px 40px 20px 40px;
`;

function DisplayInfo(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        removeUser(props.id)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const removeUser = (id) => {
        const newArr = props.user.filter((item) => item.id !== id)
        props.setGit(newArr)
    }

    return (
        <div>
            { (props.state) ? <Wrapper>
                <Button className="deleteButton" type="danger" onClick={() => showModal()}>X</Button>
                <img src={props.url} alt="profileImage" />
                <h3>{props.fullName}</h3>
            </Wrapper>
                : <div>None</div>}
            {/* {props.msg && <div>Please fetch a valid user</div>} */}
            <Modal title="Confirmation popup" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h2>Are you sure you want to remove {props.fullName} from the list?</h2>
            </Modal>
        </div>
    )
}

export default DisplayInfo