import { put, call, take, all, fork, takeEvery } from 'redux-saga/effects'

export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAIl = 'FETCH_ALL_FAIl';

const initialState = {
  loading: false,
  teachers: [],
  teacher: {},
  lessons: [],
  lesson: {}
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCH_ALL_REQUEST:
      return { ...state, ...payload }

    default:
      return state
  }
}

export const loadAllWatcher = () => ({
  type: FETCH_ALL_REQUEST
})

const loadAllWorker = function* () {

}

export default function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, loadAllWorker)
  ])
}