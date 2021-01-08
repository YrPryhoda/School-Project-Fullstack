import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TeacherTable from '../../components/TeacherTable';
import LessonTable from '../../components/LessonTable';
import { loadAllWatcher } from '../../ducks/main';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllWatcher())
  }, []);

  const { teachers, lessons } = useSelector(state => state.mainReducer)

  return (
    <Switch>
      <Route path='/teachers' render={() => <TeacherTable teachers={teachers} />} />
      <Route path='/lessons' render={() => <LessonTable lessons={lessons} />} />
    </Switch>
  )
}

export default App
