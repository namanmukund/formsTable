import React from 'react'
import './AddDataStyle.css'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #00abe5 30%, #0098cc 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 50,
    width: 250,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8px',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2)'
  },label: {
    textTransform: 'capitalize',
  },
})(Button);

class AddData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnData: this.props.columnData
    }
  }

  changeColumnValue = (key, value) => {
    const columnData = this.state.columnData
    columnData[key] = value
    this.setState({
      columnData: columnData
    })
  }

  addNewRecord = () => {
    const { populateNewData } = this.props
    populateNewData(this.state.columnData)
  }

  getDisplayOptions(column) {
    const renderOptions = []
    if (column.Options != null) {
      column.Options.forEach((option) => {
        renderOptions.push(
          <MenuItem
            id={option.ID}
            value={option.InternalValue}
            style={{ fontFamily: 'monospace', fontSize: 16 }}
          >
            {option.DisplayName}
          </MenuItem>
        )
      })
    }

    return renderOptions
  }

  render() {
    console.log('State', this.state.columnData)
    const data = this.props.data
    const addColumns = []
    for (let columnCount = 0; columnCount < data.length; columnCount += 1) {
      if (data[columnCount].Options === null) {
        addColumns.push(
          <input
            className='AddDataInput'
            placeholder={data[columnCount].DisplayName}
            value={this.state.columnData[data[columnCount].MappingColumnName]}
            onChange={(e) => this.changeColumnValue(
              data[columnCount].MappingColumnName, e.target.value
            )}
          />
        )
      } else {
        addColumns.push(
          <FormControl variant='outlined'>
            <InputLabel
              id='create-record-dropdown-label'
              style={{fontFamily: 'Monospace', fontSize: '14px'}}
            >
              {data[columnCount].DisplayName}
            </InputLabel>
            <Select
              labelId='create-record-dropdown-label'
              id={data[columnCount].MappingColumnName}
              className='AddDataDropdown'
              value={this.state.columnData[data[columnCount].MappingColumnName]}
              onChange={(e) => this.changeColumnValue(
                data[columnCount].MappingColumnName, e.target.value
              )}
            >
              {this.getDisplayOptions(data[columnCount])}
            </Select>
          </FormControl>
        )
      }
    }

    return (
      <div className='AddDataMain'>
        {addColumns}
        <div className='AddDataButton'>
          <StyledButton onClick={() => this.addNewRecord()}>
            Save/Submit
          </StyledButton>
          <StyledButton onClick={this.props.onCancel}>
            Cancel
          </StyledButton>
          <StyledButton>
            Reset
          </StyledButton>
        </div>
      </div>
    )
  }
}

export default AddData
