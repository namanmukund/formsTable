import requestToApi from '../../utils/requestToApi'
import tableData from '../../reducers/tableData'
import errors from '../../constants/errors'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

const fetchingData = () => ({
  type: FETCHING_DATA
})

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  data
})

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_ERROR,
  error
})

const getFetchUrl = (searchColumnValues) => {
  let fetchUrl = 'https://localhost:44355/api/mappingentity?'
  const keys = Object.keys(searchColumnValues)
  console.log('Keys', keys)
  keys.forEach((key) => {
    console.log('Value', searchColumnValues[key])
    if (searchColumnValues[key].length) {
      fetchUrl += (key + searchColumnValues[key].replace(' ', '%20'))
    }
  })

  return fetchUrl
}

const fetchData = (searchColumnValues) => async (dispatch) => {
  try {
    // dispatch(fetchingData())
    console.log('Fetch url', getFetchUrl())
    // const {data} = await requestToApi(getFetchUrl(searchColumnValues), 'GET')
    const data = tableData
    console.log(tableData)
    if (data) {
      dispatch(fetchDataSuccess(data))
    }
  } catch (e) {
    const error = ''
    if (error) {
      dispatch(fetchDataFailure(error))
    } else {
      dispatch(fetchDataFailure(errors.UnexpectedError))
    }
  }
}

export default fetchData
