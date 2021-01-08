import { all } from 'redux-saga/effects'
import mainSaga from '../ducks/main';

export default function* rootSaga() {
  yield all([
    mainSaga()
  ])
}