import * as React from 'react';
import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import IconButton from '@mui/material/IconButton';
import { visuallyHidden } from '@mui/utils';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Collapse from '@mui/material/Collapse';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/User/UserSlice.js';
import DialogReject from './DialogReject'
import DialogResubmit from './DialogResubmit'
import DialogResubmitAll from './DialogResubmitAll.jsx';
import DialogRejectAll from './DialogRejectAll.jsx';

function Row({ row, index, setRows }) {
  const [dialogReject, setDialogReject] = React.useState(false);
  const [dialogResubmit, setDialogResubmit] = React.useState(false);
  const [dialogRejectAll, setDialogRejectAll] = React.useState(false);
  const [dialogResubmitAll, setDialogResubmitAll] = React.useState(false);
  const [open, setOpen] = React.useState(false); //dialog open-close
  const user = useSelector(selectUser);

  const handleResubmit = (setRows) => {
    setDialogResubmit(true);
  };
  const handleReject = (setRows) => {
    setDialogReject(true);
  };
  const handleResubmitAll = (setRows) => {
    setDialogResubmitAll(true);
  };
  const handleRejectAll = (setRows) => {
    setDialogRejectAll(true);
  };

  return (
    <React.Fragment>
      <DialogReject onCommentSubmit={() => handleReject(setRows)} open={dialogReject} setOpen={setDialogReject} row={row} setRows={setRows} />

      <DialogResubmit onResubCommentSubmit={() => handleResubmit(setRows)} open={dialogResubmit} setOpen={setDialogResubmit} row={row} setRows={setRows} />

      <DialogResubmitAll onResubCommentSubmitAll={() => handleResubmitAll(setRows)} open={dialogResubmitAll} setOpen={setDialogResubmitAll} row={row} setRows={setRows}/>

      <DialogResubmitAll onCommentSubmitAll={() => handleRejectAll(setRows)} open={dialogRejectAll} setOpen={setDialogRejectAll} row={row} setRows={setRows}/>



      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell width="5%">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left" width="11%">{index + 1}</TableCell>
        <TableCell align="left" width="24%">
          {
            row.sourceTopicName
          }
        </TableCell>
        <TableCell align="left" width="10%">{
          row.priority
        }</TableCell>
        <TableCell align="left" width="12%">
          {
            row.created_by
          }
        </TableCell>
        <TableCell align="left" width="13%">
          {
            row.creation_date
          }
        </TableCell>
        <TableCell align="left" width="15%">
          {
            row.enrolment_type
          }
        </TableCell>
        <TableCell align="center" width="20%" >
          <div className='flex gap-3 justify-center'>
            <IconButton aria-label="fingerprint" color="success" onClick={handleResubmit}>
              <ReplayIcon />
            </IconButton>
            <IconButton aria-label="fingerprint" color="error" onClick={handleReject}>
              <CloseIcon />
            </IconButton>


            <IconButton aria-label="fingerprint" color="primary">
              <MoreHorizIcon />
            </IconButton>


          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{ padding: 5 }} >
              <div className="flex flex-row space-x-1 border-2 px-20 py-5 border-gray-400 rounded-lg">
                <span className='w-1/3 flex flex-col items-start justify-between gap-6'>
                  <h1>Meta Data</h1>
                  <h1>Meta Data</h1> <h1>Meta Data</h1>
                </span>
                <span className='w-1/3 flex flex-col items-start justify-between gap-6'>
                  <h1>Meta Data</h1>
                  <h1>Meta Data</h1> <h1>Meta Data</h1>
                </span>
                <span className='w-1/3 flex flex-col items-start justify-between gap-6'>
                  <h1>Meta Data</h1>
                  <h1>Meta Data</h1> <h1>Meta Data</h1>
                </span>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'packet name',
    label: 'Packet No',
    width: "11%",
  },
  {
    id: 'topic',
    label: 'Topic',
    width: "24%",
  },
  {
    id: 'priority',
    label: 'Priority',
    width: "10%",
  },
  {
    id: 'created by',
    label: 'Created By',
    width: "12%",
  },
  {
    id: 'creation date',
    label: 'Creation Date',
    width: "13%",
  },
  {
    id: 'enrolment_type',
    width: "10%",
    label: 'Enrolment type'
  }, {
    id: 'action',
    label: 'Action',
    width: "10%",
  },
];

//Head of Table
function EnhancedTableHead({ order, orderBy, onRequestSort }) {

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            width={headCell.width}
            key={headCell.id}
            align={headCell.id === "action" ? 'center' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

//Table
export default function EnhancedTable({ rows, setRows }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            rows={rows}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => (
              <Row key={index} row={row} index={index} setRows={setRows} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}