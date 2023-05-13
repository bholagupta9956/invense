import React, { Component } from "react";
import { DataTable, DataTableProps } from "primereact/datatable";
import { Column } from "primereact/column";

export interface IColumnObj {
  apiFieldKey: any;
  headerLabel: any;
  [key: string]: any;
}
interface ITableProps extends DataTableProps {
  // columns: IColumnObj[];
  headingText?: string;
}
class TableCustom extends Component<ITableProps> {
  render() {
    const { headingText, ...OtherProps } = this.props;
    const { rows, value } = OtherProps;
    return (
      <div className="flex flex-col bg-white p-4   rounded-lg">
        <div className="mb-4 text-1xl font-bold ">{headingText}</div>
        <DataTable
          className="bg-teal-500  bg-slate rounded-md "
          rows={rows}
          value={value}
          paginator // dataKey="id"
          rowHover
          stripedRows
          responsiveLayout="scroll"
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink  NextPageLink "
          rowsPerPageOptions={[5, 1, 2, 5, 10, 25, 50]}
          {...OtherProps}
        />
      </div>
    );
  }
}

export default TableCustom;
