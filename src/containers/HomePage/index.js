import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
class HomePage extends React.Component {
    render(){
        return(
            <HomePageContainer>
                <h1>Hello World</h1>
                <Link className='button' to="/chat">Chat Now</Link>
            </HomePageContainer>
        )
    }
}

export default HomePage;