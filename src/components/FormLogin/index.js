import React from 'react';
import styled from 'styled-components';
const RootDiv =  styled.div`
    flex-grow: 0;
    padding: 20px;
    & > input {
        width: 100%;
        padding: 10px;
    }

    & > div {
        padding: 10px;
        border: 1px solid black;
        margin-top: 20px;
        width: 20%
    }
`
class FormLogin extends React.Component {
    render(){
        return (
        <RootDiv>
            <h3>Email:</h3><br/><input type="text" onChange={this.props.handleEmailChange} /><br/>
            <h3>Password:</h3><br/><input type="text" onChange={this.props.handlePasswordChange} /><br/>
            <div onClick={this.props.handleRegister} >Register</div>
        </RootDiv>)
    }
}
export default FormLogin;