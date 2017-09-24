import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { initialState } from './reducer';
import { registerReducer } from './containers/SignIn/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './containers/SignIn/sagas';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
    
const sagaMiddleware = createSagaMiddleware();
const store = process.env.NODE_ENV === 'development' ? createStore(registerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(sagaMiddleware)): createStore(registerReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <MuiThemeProvider>
                <App store={store}/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));