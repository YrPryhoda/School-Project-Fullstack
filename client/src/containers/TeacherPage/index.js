import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadTeacherByIdWatcher } from '../../ducks/main';
import TeacherProfile from '../../components/TeacherProfile';

const TeacherPage = ({ match }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeacherByIdWatcher(match.params.id))
  }, []);

  const teacher = useSelector(state => state.mainReducer.teacher)

  return <TeacherProfile teacher={teacher} />
}

export default TeacherPage
