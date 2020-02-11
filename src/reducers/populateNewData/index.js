import { UPDATE_COLUMN_DATA } from '../../actions/populateNewData/populateNewData'
import data from '../data'

const getInitialState = () => {
  const initialColumnData = {}
  data.forEach((column) => {
    if (column.Options === null) {
      initialColumnData[column.MappingColumnName] = ''
    } else {
      initialColumnData[column.MappingColumnName] = column.Options[0].DisplayName
    }
  })
  const initialState = {
    data: data,
    columnData: initialColumnData
  }

  return initialState
}

const populateNewData = (state = getInitialState(), action) => {
  if (action.type === UPDATE_COLUMN_DATA) {
    return { ...state, columnData: action.columnData }
  }

  return state
}

export default populateNewData
