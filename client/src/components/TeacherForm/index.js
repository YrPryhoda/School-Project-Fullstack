import React, { useState } from 'react'
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { editTeacherWatcher } from '../../ducks/main'
import { subjects, getSubjectsList } from '../../helpers';
import Select from 'react-select'

const TeacherForm = ({ handleFormOpen, person = {} }) => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: person.firstName || '',
    lastName: person.lastName || '',
    sex: person.sex || 'male',
    age: person.age || 0,
    yearsofExperience: person.yearsofExperience || 0,
    email: person.email || '',
    tel: person.tel || '',
    avatar: person.avatar || '',
    canLearn: person.canLearn ? getSubjectsList(person.canLearn) : []
  });

  const onChange = event => setForm({
    ...form,
    [event.target.name]: event.target.value
  })

  const handleSubmitForm = event => {
    event.preventDefault();
    dispatch(editTeacherWatcher(form, person.id))
    handleFormOpen()
  }

  const handleOnSubjectChange = props => setForm(prevState => ({
    ...prevState,
    canLearn: props
  }));

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <form action='' onSubmit={handleSubmitForm}>
          <fieldset>
            <legend>First Name*</legend>
            <input
              className={styles.input}
              placeholder='Ivan'
              type="text"
              name='firstName'
              value={form.firstName}
              onChange={onChange}
            />
          </fieldset>

          <fieldset>
            <legend>Last Name*</legend>
            <input
              className={styles.input}
              placeholder='Ivanov'
              type="text"
              name='lastName'
              value={form.lastName}
              onChange={onChange}
            />
          </fieldset>

          <fieldset>
            <legend>Email*</legend>
            <input
              className={styles.input}
              placeholder='email@example.com'
              type="email"
              name='email'
              value={form.email}
              onChange={onChange}
            />
          </fieldset>

          <fieldset>
            <legend>Phone</legend>
            <input
              className={styles.input}
              placeholder='099-123-45-67'
              type="text"
              name='tel'
              value={form.tel}
              onChange={onChange}
            />
          </fieldset>

          <fieldset>
            <legend>Avatar</legend>
            <input
              className={styles.input}
              placeholder='URL address'
              type="text"
              name='avatar'
              value={form.avatar}
              onChange={onChange}
            />
          </fieldset>

          <fieldset>
            <legend>Other information</legend>
            <label htmlFor='age'> Age</label>
            <input
              id='age'
              className={styles.smInput}
              placeholder='0-99'
              type="number"
              min='0'
              max='99'
              name='age'
              value={form.age}
              onChange={onChange}
            />

            <label htmlFor='experience'> Experience</label>
            <input
              id='experience'
              className={styles.smInput}
              placeholder='0-99'
              type="number"
              min='0'
              max='99'
              name='yearsofExperience'
              value={form.yearsofExperience}
              onChange={onChange}
            />

            <label htmlFor='sex'> Sex</label>
            <select
              className={styles.smInput}
              id='sex'
              name="sex"
              value={form.sex}
              onChange={onChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </fieldset>

          <fieldset>
            <legend> Subjects</legend>
            <Select
              isMulti
              name='canLearn'
              menuPlacement='top'
              maxMenuHeight={200}
              closeMenuOnSelect={false}
              value={form.canLearn}
              options={subjects}
              onChange={handleOnSubjectChange}
            />
          </fieldset>

          <div className={styles.btnBlock}>
            <input
              type='submit'
              className={styles.btn}
              value='Apply'
            />

            <button
              onClick={handleFormOpen}
              className={styles.btn}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeacherForm
