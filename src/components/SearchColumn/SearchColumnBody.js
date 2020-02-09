import React from 'react'
import './SearchColumnBody.css'
import data from '../../reducers/data'

class SearchColumnBody extends React.Component{
  getSearchColumnsToShow = () => {
    const searchColumnsToShow = []
    console.log(data)
    for (let column = 0; column < data.length; column += 1) {
      if (data[column].Search) {
        searchColumnsToShow.push(data[column])
      }
    }
    console.log(searchColumnsToShow)
    return searchColumnsToShow
  }

  render() {
    const searchColumns = []
    const totalColumnsToShow = this.getSearchColumnsToShow().length
    for (let column = 0; column < totalColumnsToShow; column += 1) {
      searchColumns.push(
        <input
          className='SearchColumn'
          placeholder={data[column].DisplayName}
        />
      )
    }
    return (
      <div className='SearchColumnBody'>
        {searchColumns}
      </div>
    )
  }
}

export default SearchColumnBody
