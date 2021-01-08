import { put, call, take, all, fork, takeEvery } from 'redux-saga/effects'
import { callApi } from '../services/webApi';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_LESSONS_SUCCESS = 'FETCH_LESSONS_SUCCESS';
export const FETCH_ALL_FAIl = 'FETCH_ALL_FAIl';

const initialState = {
  loading: false,
  teachers: [],
  teacher: {},
  lessons: [],
  lesson: {},
  error: null
}

export const reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {

    case FETCH_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: payload
      }

    case FETCH_LESSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        lessons: payload
      }

    case FETCH_ALL_FAIl:
      return {
        ...state,
        loading: false,
        error
      }

    default:
      return state
  }
}

export const loadAllWatcher = () => ({
  type: FETCH_ALL_REQUEST
})

const loadAllWorker = function* () {
  try {
    const [teachers, lessons] = yield all([
      call(callApi, '/api/teacher'),
      call(callApi, '/api/lesson'),
    ]);

    yield all([
      put({
        type: FETCH_TEACHERS_SUCCESS,
        payload: teachers
      }),
      put({
        type: FETCH_LESSONS_SUCCESS,
        payload: lessons
      }),
    ])

  } catch (error) {

    yield put({
      type: FETCH_ALL_FAIl,
      error: error.message
    })
  }
}

export default function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, loadAllWorker)
  ])
}