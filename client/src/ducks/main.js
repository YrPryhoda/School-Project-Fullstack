import { put, call, all, takeEvery } from 'redux-saga/effects'
import { callApi } from '../services/webApi';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_LESSONS_SUCCESS = 'FETCH_LESSONS_SUCCESS';
export const REQUEST_FAIl = 'REQUEST_FAIl';

export const ADD_TEACHER_REQUEST = 'ADD_TEACHER_REQUEST';
export const ADD_TEACHER_SUCCESS = 'ADD_TEACHER_SUCCESS';

export const DELETE_TEACHER_REQUEST = 'DELETE_TEACHER_REQUEST';
export const DELETE_TEACHER_SUCCESS = 'DELETE_TEACHER_SUCCESS';

export const FETCH_TEACHER_REQUEST = 'FETCH_TEACHER_REQUEST';
export const FETCH_TEACHER_SUCCESS = 'FETCH_TEACHER_SUCCESS';

export const FETCH_WITH_FILTERS_REQUEST = 'FETCH_WITH_FILTERS_REQUEST';
export const FETCH_WITH_FILTERS_SUCCESS = 'FETCH_WITH_FILTERS_SUCCESS';

export const FETCH_MATH_TEACHERS_REQUEST = 'FETCH_MATH_TEACHERS_REQUEST';
export const FETCH_MATH_TEACHERS_SUCCESS = 'FETCH_MATH_TEACHERS_SUCCESS';


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
    case FETCH_MATH_TEACHERS_REQUEST:
    case ADD_TEACHER_REQUEST:
    case DELETE_TEACHER_REQUEST:
    case FETCH_TEACHER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_MATH_TEACHERS_SUCCESS:
    case FETCH_WITH_FILTERS_SUCCESS:
    case FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: payload
      }

    case FETCH_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        teacher: payload
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

    if (newTeacher.statusCode) {
      return;
    } else {
      yield put({
        type: ADD_TEACHER_SUCCESS,
        payload: newTeacher
      })
    }
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

export const loadTeacherByIdWatcher = id => ({
  type: FETCH_TEACHER_REQUEST,
  id
})

const loadTeacherByIdWorker = function* (action) {
  const { id } = action;
  const endpoint = `/api/teacher/${id}`;

  try {
    const teacher = yield call(callApi, endpoint)

    yield put({
      type: FETCH_TEACHER_SUCCESS,
      payload: teacher
    })

  } catch (error) {
    yield put(actionRequestFail(error))
  }
}

export const fetchWithFiltersdWatcher = (filters) => ({
  type: FETCH_WITH_FILTERS_REQUEST,
  filters
})

const fetchWithFiltersdWorker = function* (action) {
  const { filters } = action;
  const props = {
    method: 'PATCH',
    body: filters
  }
  const endpoint = '/api/teacher/filters';
  try {
    const result = yield call(callApi, endpoint, props)
    yield put({
      type: FETCH_WITH_FILTERS_SUCCESS,
      payload: result
    })
    console.log(result);
  } catch (error) {
    yield put(actionRequestFail(error))
  }
}

export const fetchTeachersWithMathFilterWatcher = () => ({
  type: FETCH_MATH_TEACHERS_REQUEST
})

const fetchTeachersWithMathFilterWorker = function* () {
  const endpoint = '/api/teacher/special-filter';

  try {
    const result = yield call(callApi, endpoint)
    
    yield put({
      type: FETCH_MATH_TEACHERS_SUCCESS,
      payload: result
    })

  } catch (error) {
    yield put(actionRequestFail(error))
  }
}

export default function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, loadAllWorker),
    takeEvery(ADD_TEACHER_REQUEST, editTeacherWorker),
    takeEvery(DELETE_TEACHER_REQUEST, deleteTeacherWorker),
    takeEvery(FETCH_TEACHER_REQUEST, loadTeacherByIdWorker),
    takeEvery(FETCH_WITH_FILTERS_REQUEST, fetchWithFiltersdWorker),
    takeEvery(FETCH_MATH_TEACHERS_REQUEST, fetchTeachersWithMathFilterWorker),
  ])
}