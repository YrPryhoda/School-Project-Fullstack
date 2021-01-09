import { put, call, take, all, fork, takeEvery } from 'redux-saga/effects'
import { callApi } from '../services/webApi';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_LESSONS_SUCCESS = 'FETCH_LESSONS_SUCCESS';
export const REQUEST_FAIl = 'REQUEST_FAIl';

export const ADD_TEACHER_REQUEST = 'ADD_TEACHER_REQUEST';
export const ADD_TEACHER_SUCCESS = 'ADD_TEACHER_SUCCESS';

export const DELETE_TEACHER_REQUEST = 'DELETE_TEACHER_REQUEST';
export const DELETE_TEACHER_SUCCESS = 'DELETE_TEACHER_SUCCESS';

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
    case ADD_TEACHER_REQUEST:
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

    case ADD_TEACHER_SUCCESS:
      const isNewIndex = state.teachers.findIndex(el => el.id === payload.id);

      return {
        ...state,
        loading: false,
        teachers: isNewIndex === -1 ?
          [...state.teachers, payload] :
          [
            ...state.teachers.slice(0, isNewIndex),
            payload,
            ...state.teachers.slice(isNewIndex + 1)
          ]
      }

    case FETCH_LESSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        lessons: payload
      }

    case DELETE_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: state.teachers.filter(el => el.id !== payload)
      }

    case REQUEST_FAIl:
      return {
        ...state,
        loading: false,
        error
      }

    default:
      return state
  }
}

const actionRequestFail = (error) => ({
  type: REQUEST_FAIl,
  error: error.message
})

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
      put({ type: FETCH_TEACHERS_SUCCESS, payload: teachers }),
      put({ type: FETCH_LESSONS_SUCCESS, payload: lessons }),
    ])

  } catch (error) {
    yield put(actionRequestFail(error))
  }
}

export const editTeacherWatcher = (person, id) => ({
  type: ADD_TEACHER_REQUEST,
  person,
  id
})

const editTeacherWorker = function* (action) {
  const { person, id } = action;

  const endpoint = `/api/teacher/${id ? id : ''}`

  const props = {
    method: id ? 'PUT' : 'POST',
    body: person
  }

  try {

    const newTeacher = yield call(callApi, endpoint, props)

    yield put({
      type: ADD_TEACHER_SUCCESS,
      payload: newTeacher
    })
  } catch (error) {
    yield put(actionRequestFail(error))
  }
}

export const deleteTeacherWatcher = id => ({
  type: DELETE_TEACHER_REQUEST,
  id
})

const deleteTeacherWorker = function* (action) {
  const { id } = action;
  const props = {
    method: 'DELETE'
  }
  const endpoint = `/api/teacher/${id}`;
  try {
    const deleted = yield call(callApi, endpoint, props)

    if (deleted.affected === 1) {
      yield put({
        type: DELETE_TEACHER_SUCCESS,
        payload: id
      })
    }
  } catch (error) {
    yield put(actionRequestFail(error))
  }
}

export default function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, loadAllWorker),
    takeEvery(ADD_TEACHER_REQUEST, editTeacherWorker),
    takeEvery(DELETE_TEACHER_REQUEST, deleteTeacherWorker),
  ])
}