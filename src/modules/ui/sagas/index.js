import { all, put } from 'redux-saga/effects'
import { types } from 'modules/ui'

export function* test() {
    yield put({type: types.TOGGLE, amen: 'amen'})
}
export default function* sagas() {
    yield all([
        test()
    ])
}
