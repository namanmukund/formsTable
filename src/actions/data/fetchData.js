import requestToApi from '../../utils/requestToApi'

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
  keys.forEach((key) => {
    fetchUrl += (key + searchColumnValues.replace(' ', '%20'))
  })

  return fetchUrl
}

const fetchData = (searchColumnValues) => async dispatch => {
  try {
    dispatch(fetchingData())
    const {data} = await requestToApi(getFetchUrl(searchColumnValues), 'GET')
    if (data) {
      dispatch(fetchDataSuccess(data))
    }
  } catch (e) {
    const error = ''
    if (error) {
      dispatch(fetchDataFailure(error))
    } else {
      dispatch('Unexpected error occurred')
    }
  }
}

export default fetchData
