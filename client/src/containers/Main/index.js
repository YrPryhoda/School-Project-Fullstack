import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadAllWatcher } from '../../ducks/main';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllWatcher())
  }, [])
  return (
    <div>
      Yo
    </div>
  )
}

export default App
