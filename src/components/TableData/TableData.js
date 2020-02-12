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
import VisibilityIcon from '@material-ui/icons/Visibility';
import MaterialTable from 'material-table'
import './TableData.css'

const tableIcons = tableDataProps => ({
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()
    tableDataProps.onRowAddClick()
  }} />),
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
  ViewColumn: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />)
})

class TableData extends React.Component{

  addRow = () => {
  }

  render() {
    if (this.props.tableData && this.props.tableData.length === 0) {
      console.log('-----------------------------')
      return(
        <MaterialTable
          title='SL GL Mapping'
          columns={this.props.columns}
          data={this.props.tableData}
          icons={tableIcons(this.props)}
          options={{
            exportButton: true,
            columnsButton: true,
          }}
          editable={{
            onRowAdd: () => this.props.onAdd,
          }}
        >

        </MaterialTable>
      )
    }
    console.log('--> Table data props', this.props)

    return(
      <MaterialTable
        title='SL GL Mapping'
        columns={this.props.columns}
        data={this.props.tableData}
        icons={tableIcons(this.props)}
        options={{
          exportButton: true,
          columnsButton: true,
        }}
        editable={{
          onRowAdd: () => this.props.onAdd,
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
              }, 6000);
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
      >

      </MaterialTable>
    )
  }
}

export default TableData
