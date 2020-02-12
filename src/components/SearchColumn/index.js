import { connect } from 'react-redux'
import updateSearchColumnValue from '../../actions/searchColumn'
import fetchData from '../../actions/data'
import { withRouter } from 'react-router-dom'
import SearchColumnBody from './SearchColumnBody'

const mapStateToProps = state => state.searchColumnValues

const mapDispatchToProps = dispatch => ({
  fetchData: (searchColumnValues) => {
    console.log('Insssiiiidde fetchData')
    fetchData(dispatch, searchColumnValues)
  },
  updateSearchColumnValue: (key, value) => dispatch(updateSearchColumnValue(key, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchColumnBody))
