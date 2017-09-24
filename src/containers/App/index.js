import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import './index.css';
import {
    NavLink
} from 'react-router-dom'
import styled from 'styled-components';
import HomePage from '../HomePage';
import RoomChat from '../RoomChat';
import SignIn from '../SignIn';
const Nav = styled.nav`
    max-width: 100%;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    border-bottom: 1px solid black;
    > * {
        color: black;
        flex-grow: 1;
        text-decoration: none;
        text-align:center;
        font-size: 14px;
    }
    > *:hover {
        background: white;
        color: black;
        text-decoration: underline;
    }
`
const Space = styled.div`
    flex-grow: 9
`;

const NavigationLink = styled(NavLink)`
    display: flex;
    justify-content: center;
`;
class App extends React.Component {
    render(){
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}> 
                <Nav>
                    <NavigationLink exact to='/' activeClassName="active-link"><p>Home Page</p></NavigationLink>
                    <Space></Space>
                    <NavigationLink to='/register' activeClassName="active-link"><p>Sign In</p></NavigationLink>
                    <NavigationLink to='/login' activeClassName="active-link"><p>Login</p></NavigationLink>
                </Nav>
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/register' component={SignIn}/>
                    <Route path='/login' component={SignIn}/>
                    <Route path='/chat' component={RoomChat}/>
                </Switch>
            </div>
        )
    }
}
export default App;