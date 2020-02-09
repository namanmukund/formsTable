import React from 'react'
import { FormControl } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import'./Header.css'

const mappingTableDropdown = 'Mapping Data Table Options'
const createNewRecord = 'Create New Record - Form Options'

const Header = () => {

  return (
    <div className='Head'>
      <div className='Logo' />
      <div className='Dropdown'>
        <FormControl variant='outlined'>
          <InputLabel
            id='mapping-table-dropdown-label'
            style={{color: '#ffffff', fontFamily: 'Monospace', fontSize: '14px'}}
          >
            {mappingTableDropdown}
          </InputLabel>
          <Select
            labelId='mapping-table-dropdown-label'
            id='mapping-table-dropdown'
            style={{height: 50, width: 250}}
          >
          </Select>
        </FormControl>
      </div>
        <div className='Dropdown'>
          <FormControl variant='outlined'>
            <InputLabel
              id='create-record-dropdown-label'
              style={{color: '#ffffff', fontFamily: 'Monospace', fontSize: '14px'}}
            >
              {createNewRecord}
            </InputLabel>
            <Select
              labelId='create-record-dropdown-label'
              id='mapping-table-dropdown'
              style={{height: 50, width: 300}}
            >
            </Select>
          </FormControl>
        </div>
      </div>
  )
}

export default Header
