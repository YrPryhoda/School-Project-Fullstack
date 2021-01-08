import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TeacherTable from '../../components/TeacherTable';
import LessonTable from '../../components/LessonTable';
import Landing from '../../components/Landing';
import { loadAllWatcher } from '../../ducks/main';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllWatcher())
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { teachers, lessons } = useSelector(state => state.mainReducer)

  const handleFormOpen = () => setIsModalOpen(!isModalOpen)

  return (
    <Switch>
      <Route path='/' exact render={() => <Landing />} />
      <Route path='/teachers' render={() => <TeacherTable
        teachers={teachers}
        handleFormOpen={handleFormOpen}
        isModalOpen={isModalOpen}
      />} />
      <Route path='/lessons' render={() => <LessonTable lessons={lessons} />} />
    </Switch>
  )
}

export default App
