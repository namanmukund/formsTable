export const UPDATE_SEARCH_COLUMN_VALUE = 'UPDATE_SEARCH_COLUMN_VALUE'

const updateSearchColumnValue = (key, value) => ({
  type: UPDATE_SEARCH_COLUMN_VALUE,
  key,
  value
})

export default updateSearchColumnValue
