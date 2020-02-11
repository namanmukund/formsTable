export const UPDATE_COLUMN_DATA = 'UPDATE_COLUMN_DATA'

const populateNewData = columnData => ({
  type: UPDATE_COLUMN_DATA,
  columnData
})

export default populateNewData
