import { fromJS } from 'immutable';

export const initialState = fromJS({
    email: '',
    password: '',
});

export const registerReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'REGISTER':
            return state;
        default:
            return state;
    }
}
