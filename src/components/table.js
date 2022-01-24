import React from "react";
import styled from "styled-components";
import { useTable, usePagination, useRowSelect } from "react-table";
import { Help, PermDeviceInformation } from "@mui/icons-material";
import { Avatar, Dialog } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { BiBasketball } from "react-icons/bi";
import Popup from "./Popup";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const [open, setOpen] = React.useState(false);
  const handleDialog = (e)=>{
    setOpen(true);
  }
  // Render the UI for your table
  return (
    <>
      <div className="flex bg-gray-400 justify-between p-4">
        <div className="flex items-center">
          <Help />
          <h1 className="mx-2">Display</h1>
          <select
            style={{ width: "80px", height: "30px" }}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} rows
              </option>
            ))}
          </select>
        </div>{" "}
        <span className="text-white">
          <strong>
            ( {pageIndex + 1} of {data.length} entries)
            <br />
            (filtered from {data.length} total entries)
          </strong>{" "}
        </span>
        {/* <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '} */}
        <div className="flex mr-2">
          <button
            className="bg-white rounded text-sky-500 p-2 w-20"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"Previous"}
          </button>{" "}
          {pageOptions.map((page, i) => {
            const isActive = pageIndex === i;
            return (
              <button
                key={`pagination-option-${i}`}
                className={`bg-white rounded text-sky-500 px-2 ${
                  isActive ? "active" : ""
                }`}
                style={{ margin: "0px 1px " }}
                onClick={() => {
                  gotoPage(i);
                }}
              >
                {" "}
                {i + 1}{" "}
              </button>
            );
          })}
          <button
            className="bg-white rounded text-sky-500 p-2 w-20 mr-4"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {"Next"}
          </button>{" "}
          <span className="mt-1">
            <button className="bg-indigo-500 px-4 py-1 mx-1 text-white outline-black rounded-md">
              PDF
            </button>
            <button className="bg-indigo-500 px-4 py-1 mx-1 text-white outline-black rounded-md">
              Excel
            </button>
            <Help />
          </span>
        </div>
      </div>
      <table
        className="w-full"
        style={{ border: "solid grey", borderWidth: "thin", outline: "none" }}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="bg-indigo-300 py-4"
                  style={{
                    border: "solid grey",
                    borderWidth: "thin",
                    outline: "none",
                  }}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr onClick={handleDialog} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{
                        border: "solid grey",
                        borderWidth: "thin",
                        outline: "none",
                      }}
                      className="outline-none"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Dialog 
      onClose={() => setOpen(false)}
      BackdropProps={{
        style: { backgroundColor: "rgba(0,0,0,0.07)" },
      }}
      sx={{
        "& .MuiDialog-container .MuiPaper-root": {
          boxShadow: "none",
          width:'30%',
          height: "90%",
          borderRadius: "15px",
          paddingTop: "20px",
        },
      }}
      open={open}>
    
        <div className="flex flex-col items-center justify-center">
          <Avatar style ={{width:'120px',height:'120px',marginTop:'50px'}}/>
          <strong className="mt-6" style ={{fontFamily:'Poppins',fontSize:'28px',fontWeight:'500px'}}>Joeylene Rivera</strong>
          <p style ={{fontFamily:'Poppins',fontSize:'15px',fontWeight:'500px'}}>Florida State Universtiy</p>
          <span  style ={{fontFamily:'Poppins',fontSize:'14px',fontWeight:'500px',color:'black',marginTop:'30px'}}>
            <p>GPA: 3.4</p>
            <p>SAT: 1100</p>
            <p>ACT: 70</p>
          </span>
          <div  style ={{fontFamily:'Poppins',fontSize:'28px',fontWeight:'500px',marginTop:'40px'}}>200:24</div>
        </div>
        <div className="flex justify-evenly items-center mt-8">
          <Twitter className="text-violet-900"/>
          <BiBasketball className="text-violet-900"/>
          <Instagram className="text-violet-900"/>
          <LinkedIn className="text-violet-900" />
          <GitHub className="text-violet-900"/>
        </div>
      </Dialog>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
    </>
  );
}

function ReactTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "NCAA ID",
        accessor: "ncaa_id",
      },

      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Initiated date",
        accessor: "initiated_date",
      },
      {
        Header: "Last Updated",
        accessor: "last_updated",
      },
      {
        Header: "D",
        accessor: "d",
      },
      {
        Header: "Institution",
        accessor: "institution",
      },
      {
        Header: "Sport",
        accessor: "sports",
      },
      {
        Header: "Sport conference",
        accessor: "sport_conference",
      },
      {
        Header: "Student status",
        accessor: "student_status",
        render: (row) => (
            <div className="bg-gray-400">Hello</div>
        )
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
        {"year": "2020", "ncaa_id": "12345", "first_name": "Joe", "last_name": "R", "initiated_date": "2020-01-01", "last_updated": "2020-01-01", "d": "D", "institution": "Florida State University", "sports": "Basketball", "sport_conference": "ACC", "student_status": "Widthdrawn"},
        {"year": "2020", "ncaa_id": "12345", "first_name": "Joe", "last_name": "R", "initiated_date": "2020-01-01", "last_updated": "2020-01-01", "d": "D", "institution": "Florida State University", "sports": "Basketball", "sport_conference": "ACC", "student_status": "Metriculated"},
        {"year": "2020", "ncaa_id": "12345", "first_name": "Joe", "last_name": "R", "initiated_date": "2020-01-01", "last_updated": "2020-01-01", "d": "D", "institution": "Florida State University", "sports": "Basketball", "sport_conference": "ACC", "student_status": "Active"},
        {"year": "2020", "ncaa_id": "12345", "first_name": "Joe", "last_name": "R", "initiated_date": "2020-01-01", "last_updated": "2020-01-01", "d": "D", "institution": "Florida State University", "sports": "Basketball", "sport_conference": "ACC", "student_status": "Active"},
        {"year": "2020", "ncaa_id": "12345", "first_name": "Joe", "last_name": "R", "initiated_date": "2020-01-01", "last_updated": "2020-01-01", "d": "D", "institution": "Florida State University", "sports": "Basketball", "sport_conference": "ACC", "student_status": "Active"},
    ],
    []
  );

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default ReactTable;
