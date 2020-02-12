import React from 'react'
import Header from '../../components/Header/Header'
import SearchColumnBody from '../../components/SearchColumn'
import TableData from '../../components/TableData'
import AddData from '../../components/AddData'

class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      openAddNewRecordView: false
    }
  }

  toggleAddNewRecordView = () => {
    if (this.state.openAddNewRecordView) {
      this.setState({
        openAddNewRecordView: false
      })
    } else {
      this.setState({
        openAddNewRecordView: true
      })
    }
  }

  render() {
    if (this.state.openAddNewRecordView) {
      return (
        <div>
          <Header />
          <AddData
            onCancel={() => this.toggleAddNewRecordView()}
          />
        </div>
      )
    }

    return (
      <div>
        <Header />
        <SearchColumnBody onRowAddClick={() => this.toggleAddNewRecordView()} />
      </div>
    )
  }
}

export default HomePage
