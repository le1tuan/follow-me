import { put, takeEvery, all, takeLatest, call } from 'redux-saga/effects'
import 'whatwg-fetch'
import "babel-polyfill"
export function* watchIncrementAsync() {
    yield takeLatest('REGISTER',register)
}
export function* register(action){
    try{
        const result = yield call(fetch, `http://localhost:4000${action.data.url}`, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    email: action.data.email,
                    password: action.data.password,
                }
            })
        });
    }catch(e) {
        console.log(e.message);
    }
}

export default function* rootSaga(){
    yield all([
        watchIncrementAsync()
    ])
}