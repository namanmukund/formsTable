import data from '../data'
import { UPDATE_SEARCH_COLUMN_VALUE } from '../../actions/searchColumn/updateSearchColumnValue'
import fetchData from '../../actions/data'

const getSearchColumns = () => {
  const searchColumns = []
  data.forEach((column) => {
    if (column.Search) {
      searchColumns.push(column)
    }
  })

  return searchColumns
}

const getInitialState = () => {
  const searchColumnInitialValues = {}
  const searchColumns = getSearchColumns()
  searchColumns.forEach((column) => {
    if (column.Options === null) {
      searchColumnInitialValues[column.MappingColumnName] = ''
    } else {
      searchColumnInitialValues[column.MappingColumnName] = column.Options[0].DisplayName
    }
  })

  const initialState = {
    searchColumns: searchColumns,
    searchColumnValues: searchColumnInitialValues,
    tableData: [],
    columns: data
  }
  return initialState
}

const searchColumnValues = (state = getInitialState(), action) => {
  if (action.type === UPDATE_SEARCH_COLUMN_VALUE) {
    const searchColumnValues = state.searchColumnValues
    searchColumnValues[action.key] = action.value
    return {...state, searchColumnValues: searchColumnValues}
  }

  return state
}

export default searchColumnValues
