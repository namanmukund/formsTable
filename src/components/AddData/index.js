import AddData from './AddData'
import populateNewData from '../../actions/populateNewData'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const mapStateToProps = state => state.populateNewData

const mapDispatchToProps = dispatch => ({
  populateNewData: columnData => dispatch(populateNewData(columnData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddData))
