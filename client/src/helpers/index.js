export const getSimpleList = (arr, field = 'title') => {
  if (!arr || !arr.length) {
    return '-'
  }

  return arr.map(el => el[field]).join(', ')
}

export const subjects = [
  { value: 'Maths', label: 'Maths' },
  { value: 'Biology', label: 'Biology' },
  { value: 'History', label: 'History' },
  { value: 'Art', label: 'Art' },
  { value: 'Chemistry', label: 'Chemistry' },
  { value: 'Music', label: 'Music' },
  { value: 'Physics', label: 'Physics' },
  { value: 'Sport', label: 'Sport' },
  { value: 'Literature', label: 'Literature' },
  { value: 'English', label: 'English' },
]

export const getSubjectsList = arr => arr.map(el => ({ value: el.title, label: el.title }))
