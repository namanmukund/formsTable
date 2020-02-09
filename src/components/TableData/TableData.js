import React, { forwardRef } from 'react'
import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import MaterialTable from 'material-table'
import './TableData.css'
import data from '../../reducers/data'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
}

const getColumnNames = () => {
  const columns = []
  for (let columnCount = 0; columnCount < data.length; columnCount += 1) {
    const minWidth = data[columnCount].DisplayName.length > 20 ?
      data[columnCount].DisplayName.length * 10 :
      data[columnCount].DisplayName.length * 20
    console.log(data[columnCount].DisplayName, data[columnCount].DisplayName.length, minWidth)
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
        editable: data[columnCount].Editable
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
  console.log(columns)
  return columns
}

const getTotalRows = () => {
  let rowCount = 0
  for (let columnCount = 0; columnCount < data.length; columnCount += 1) {
    if(data[columnCount].Options != null && rowCount < data[columnCount].Options.length) {
      rowCount = data[columnCount].Options.length
    }
  }
  console.log(rowCount)
  return rowCount
}

const getColumnNameOptionsLengthMap = () => {
  const columnNameOptionsLengthMap = {}
  for (let columnCount = 0; columnCount < data.length; columnCount += 1) {
    if (data[columnCount].Options == null) {
      columnNameOptionsLengthMap[data[columnCount].MappingColumnName] = 0
    } else {
      columnNameOptionsLengthMap[data[columnCount].MappingColumnName] = data[columnCount].Options.length
    }
  }
  console.log(columnNameOptionsLengthMap)
  return columnNameOptionsLengthMap
}

const getColumnData = () => {
  const columnData = []
  const totalRowCount = getTotalRows()
  const columnNameOptionsLengthMap = getColumnNameOptionsLengthMap()
  for (let row = 1; row <= totalRowCount; row += 1) {
    const rowData = {}
    for (let columnCount = 0; columnCount < data.length; columnCount += 1) {
      const key = data[columnCount].MappingColumnName
      if (columnNameOptionsLengthMap[key] == null) {
        rowData[key] = 'N/A'
      }
      else {
        if (columnNameOptionsLengthMap[key] < row) {
          rowData[key] = 'N/A'
        } else {
          rowData[key] = data[columnCount].Options[row - 1]['DisplayName']
        }
      }
    }
    columnData.push(rowData)
  }
  console.log(columnData)

  return columnData
}

class TableData extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      columns: getColumnNames(),
      data: getColumnData(),
    }
  }

  addRow = () => {
    console.log('Adding Row....')
  }



  render() {
    return(
      <MaterialTable
        title='SL GL Mapping'
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
        icons={tableIcons}
        exportButton
      >

      </MaterialTable>
    )
  }
}

export default TableData
