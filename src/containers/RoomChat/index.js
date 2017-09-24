import React from 'react';
import styled from 'styled-components';
import socket from 'socket.io-client';

const RootDiv = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    top: 56px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Space = styled.div`
    flex-grow: 8;
`
const Input = styled.input`
    flex-grow: 1;
`
class RoomChat extends React.PureComponent {
    constructor(props){
        super(props);
        this.io = socket('http://localhost:4000/chat');
        this.io.emit('login', {
            user: 'le1tuan'+Math.random()
        });
        this.io.on('user connected', (name) => {
            console.log(`${name} is connected`);
        });
        this.io.on('user disconnected', () => {
            console.log('le1tuan have disconnected');
        });
        this.io.on('is-typing', (data) => {
            document.querySelector('.typing').innerHTML  = 'Is Typing'
        });
        this.io.on('not-typing', () => {
            document.querySelector('.typing').innerHTML  = ''
        });
        this.io.on('online', (data) => {
            let i = '';
            data.map((x) => {
                i = `${i} ${x.username}`
            });
            document.querySelector('.online').innerHTML = i;
        });
        this.timeout = null;
    }
    setContent = (e) => {
        this.io.emit('typing','le1tuan');
        if(e.keyCode === 13) {
            this.io.emit('my-event', e.target.value);
            e.target.value = '';
        };
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.io.emit('stop-typing')
        }, 500);
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <RootDiv>
                <Space/>
                <div className="online"></div>
                <div className="typing"></div>
                <Input type="text" placeholder="your text" onKeyUp={this.setContent}/>
            </RootDiv>
        )
    }
}

export default RoomChat;