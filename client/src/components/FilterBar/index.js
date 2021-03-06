import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchWithFiltersdWatcher, loadAllWatcher, fetchTeachersWithMathFilterWatcher } from '../../ducks/main';

import styles from './styles.module.scss';

const FilterBar = () => {
  const dispatch = useDispatch();
  const initialState = {
    sex: '',
    age: '',
    yearsofExperience: ''
  }

  const [filters, setFilters] = useState(initialState);

  const onFilterChange = event => setFilters(prevState => ({
    ...prevState,
    [event.target.name]: event.target.value
  }));

  const onSubmit = event => {
    event.preventDefault();
    dispatch(fetchWithFiltersdWatcher(filters))
  }

  const handleResetFilters = () => {
    setFilters(initialState)
    dispatch(loadAllWatcher())
  }

  const handleMathFilter = () => dispatch(fetchTeachersWithMathFilterWatcher())

  return (
    <div className={styles.section}>
      <form onSubmit={onSubmit} className={styles.filterForm}>

        <div className={styles.formField}>
          <label htmlFor='sex'>Sex</label>
          <select
            id='sex'
            name="sex"
            value={filters.sex}
            onChange={onFilterChange}
          >
            <option value="">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.formField}>
          <label htmlFor='age'>Age</label>
          <input
            name='age'
            type='number'
            min='0'
            placeholder='set age'
            id='age'
            value={filters.age}
            onChange={onFilterChange}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor='yearsofExperience'>Experience</label>
          <input
            name='yearsofExperience'
            type='number'
            min='0'
            placeholder='years of experience'
            id='yearsofExperience'
            value={filters.yearsofExperience}
            onChange={onFilterChange}
          />
        </div>
        <input className={styles.btn} type='submit' value='Search' />
        <input
          className={styles.btn}
          type='button'
          value='Special Math Filter'
          onClick={handleMathFilter}
        />
        <input
          className={styles.btn}
          type='button'
          value='Reset filters'
          onClick={handleResetFilters}
        />
      </form>

    </div>
  )
}

export default FilterBar
