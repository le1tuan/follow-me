import React from 'react';
import {connect} from 'react-redux';
import appActions from './actions';
import FormLogin from '../../components/FormLogin';
import { bindActionCreators } from 'react';
import styled from 'styled-components';
const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        });
    }
    handlePasswordChange = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    }
    handleRegister = (e) => {
        e.preventDefault();
        this.props.register({
            email: this.state.email,
            password: this.state.password,
            url: this.props.match.url,
        })
    }
    render(){
        return (
            <RootDiv>
                 <FormLogin
                    handleEmailChange={this.handleEmailChange} 
                    handlePasswordChange={this.handlePasswordChange}
                    handleRegister={this.handleRegister}
                 />
            </RootDiv>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) => {
            dispatch(appActions.register(data))
        } 
    }
}
export default connect(null, mapDispatchToProps)(SignIn);