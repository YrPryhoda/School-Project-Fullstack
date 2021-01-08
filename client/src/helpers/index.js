export const getSimpleList = arr => {
  if (!arr || !arr.length) {
    return '-'
  }

  return arr.map(el => Object.values(el))
    .flat()
    .join(', ')
}