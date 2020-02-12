import React from 'react'
import './SearchColumnBody.css'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TableData from '../TableData'

class SearchColumnBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchColumnValues: this.props.searchColumnValues,
    }
  }

  changeColumnValues = (key, value) => {
    const searchColumnValues = this.state.searchColumnValues
    searchColumnValues[key] = value
    this.setState({
      searchColumnValues: searchColumnValues
    })
    const { updateSearchColumnValue } = this.props
    updateSearchColumnValue(key, value)
  }

  getTableData = async () => {
    console.log('Props', this.props)
    console.log('Fetching Data')
    const { fetchData } = this.props
    await fetchData(this.state.searchColumnValues)
  }

  getDisplayOptions(column) {
    const renderOptions = []
    if (column.Options != null) {
      column.Options.forEach((option) => {
        renderOptions.push(
          <MenuItem
            id={option.ID}
            value={option.InternalValue}
            style={{ fontFamily: 'monospace', fontSize: 14 }}
          >
            {option.DisplayName}
          </MenuItem>
        )
      })
    }

    return renderOptions
  }

  getColumnNames = () => {
    const data = this.props.columns
    const columns = []
    for (let columnCount = 0; columnCount < data.length; columnCount += 1) {
      const minWidth = data[columnCount].DisplayName.length > 20 ?
        data[columnCount].DisplayName.length * 10 :
        data[columnCount].DisplayName.length * 20
      const columnProps = {
        title: data[columnCount].DisplayName,
        field: data[columnCount].MappingColumnName,
        type: data[columnCount].Type,
        headerStyle: {
          minWidth: minWidth,
          fontWeight: 'bold',
          height: 50,
          padding: '2px 2px 0 30px',
          fontFamily: 'monospace',
          fontSize: 14,
          textAlign: 'center',
          editable: data[columnCount].Editable,
          flexWrap: 'wrap'
        },
        cellStyle: {
          minWidth: minWidth,
          height: 50,
          padding: '2px 2px 0 0',
          fontFamily: 'monospace',
          textAlign: 'center',
          fontSize: 14
        }
      }
      columns.push(columnProps)
    }
    return columns
  }

  render() {
    const searchColumns = []
    const searchColumnsToShow = this.props.searchColumns
    const totalColumnsToShow = this.props.searchColumns.length
    for (let columnCount = 0; columnCount < totalColumnsToShow; columnCount += 1) {
      if (searchColumnsToShow[columnCount].Options === null) {
        searchColumns.push(
          <input
            className='SearchColumnInput'
            placeholder={searchColumnsToShow[columnCount].DisplayName}
            value={this.state.searchColumnValues[searchColumnsToShow[columnCount].MappingColumnName]}
            onChange={
              (e) => this.changeColumnValues(
                searchColumnsToShow[columnCount].MappingColumnName, e.target.value
              )}
          />
        )
      } else {
        searchColumns.push(
          <FormControl variant='outlined'>
            <InputLabel
              id={`label-${searchColumnsToShow[columnCount].MappingColumnName}`}
              style={{fontFamily: 'monospace', fontSize: '12px'}}
            >
              {searchColumnsToShow[columnCount].DisplayName}
            </InputLabel>
            <Select
              id={searchColumnsToShow[columnCount].MappingColumnName}
              className='SearchColumnDropdown'
              value={this.state.searchColumnValues[searchColumnsToShow[columnCount].MappingColumnName]}
              onChange={
                (e) => this.changeColumnValues(
                  searchColumnsToShow[columnCount].MappingColumnName, e.target.value
                )}
            >
              {this.getDisplayOptions(searchColumnsToShow[columnCount])}
            </Select>
          </FormControl>
        )
      }
    }
    return (
      <div style={{marginTop: 8}}>
      <div className='SearchColumnBody'>
        {searchColumns}
      </div>
      <TableData
        tableData={this.getTableData()}
        columns={this.props.tableData}
      />
      </div>
    )
  }
}

export default SearchColumnBody
