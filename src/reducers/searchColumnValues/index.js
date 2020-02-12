import data from '../data'
import { UPDATE_SEARCH_COLUMN_VALUE } from '../../actions/searchColumn/updateSearchColumnValue'
import fetchData from '../../actions/data'
import {
  FETCHING_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from '../../actions/data/fetchData'

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
  // const tableData = getInitialTableData()
  const initialState = {
    searchColumns: searchColumns,
    searchColumnValues: searchColumnInitialValues,
    columns: data,
    tableData: [],
    error: [],
    fetchingData: false
  }
  return initialState
}

const searchColumnValues = (state = getInitialState(), action) => {
  switch (action.type) {
    case UPDATE_SEARCH_COLUMN_VALUE:
      const searchColumnValues = state.searchColumnValues
      searchColumnValues[action.key] = action.value
      return {...state, searchColumnValues: searchColumnValues}
    case  FETCHING_DATA:
      return {...state, fetchingData: true}
    case  FETCH_DATA_SUCCESS:
      console.log('Setting data in redux')
      return {...state,
        tableData: action.data,
        fetchingData: false
      }
    case  FETCH_DATA_ERROR:
      return {...state,
        error: action.error,
        fetchingData: false
      }
    default:
      return state
  }

  return state
}

export default searchColumnValues
