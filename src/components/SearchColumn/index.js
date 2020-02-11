import { connect } from 'react-redux'
import updateSearchColumnValue from '../../actions/searchColumn'
import fetchData from '../../actions/data'
import { withRouter } from 'react-router'
import SearchColumnBody from './SearchColumnBody'

const mapStateToProps = state => state.searchColumnValues

const mapDispatchToProps = dispatch => ({
  fetchData: (searchColumnValues) => dispatch(fetchData(searchColumnValues)),
  updateSearchColumnValue: (key, value) => dispatch(updateSearchColumnValue(key, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchColumnBody))
