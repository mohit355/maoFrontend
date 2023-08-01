import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRequest } from '../../../helpers/request-helper';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SessionContext } from '../../_app';
import ShowMessage from '../../ErrorHandling/showMessage';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

const AdminList = () => {

  const [admins, setAdmins] = useState([])
  const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});
  const { userDetails } = useContext(SessionContext);

  const [{loading:getAdminsLoading}, getAllAdmins] = useRequest(
		{
			url: "/auth/admin/all",
			method: 'GET',
		},
		{ manual: true },
	);
  
const [{loading:deleteUserLoading}, deleteUser] = useRequest(
		{
			url: "/auth/deleteUser/:id",
			method: 'POST',
		},
		{ manual: true },
	);

  const [{loading: removeAdminLoading}, removeAdmin] = useRequest(
		{
			url: "/auth/removeAdmin/:id",
			method: 'POST',
		},
		{ manual: true },
	);

  const listAllAdmins=()=>{
    getAllAdmins({
      headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			}
    }).then((response)=>{
      console.log("admins ",response.data.data);
      setAdmins(response.data.data)
    }).catch((error)=>{})
  }

  const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

  const handleRemoveAdmin=(userId)=>{
    removeAdmin({
      url: `/auth/removeAdmin/${userId}`,
      headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			}
    }).then((response)=>{
      setShowNotification({
		type: 'success',
		open: true,
		msg: response.data.msg,
	})
      listAllAdmins();
    }).catch((error)=>{
      listAllAdmins();
    })

    console.log("HELLO");
  }

  const handleDeleteAdmin=(userId)=>{
    deleteUser({
      url: `/auth/deleteUser/${userId}`,
      headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			}
    }).then((response)=>{
      console.log(response);
      setShowNotification({
		type: 'success',
		open: true,
		msg: response.data.msg,
	})
      listAllAdmins();
    }).catch((error)=>{
      listAllAdmins();
    })
  }

  useEffect(() => {
    listAllAdmins();
  }, [])

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Admin Name</StyledTableCell>
            <StyledTableCell align="center">Admin Mobile No.</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((admin) => (
            <TableRow key={admin.id}>
              <StyledTableCell>
                {admin.name}
              </StyledTableCell>
              <StyledTableCell align="center">{admin.phoneNumber}</StyledTableCell>
              <StyledTableCell align="center"><span onClick={()=>{handleRemoveAdmin(admin.id)}} style={{color:"red",cursor:"pointer"}}>{userDetails.id !== admin.id && "Remove from Admin" }</span></StyledTableCell>
              <StyledTableCell align="center" onClick={()=>{handleDeleteAdmin(admin.id)}} style={{color:"red",cursor:"pointer"}} >
                {userDetails.id !== admin.id && <DeleteIcon/> }
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ShowMessage
				handleClose={handleClose}
				open={showNotification.open}
				type={showNotification.type}
				message={showNotification.msg}
			/>
    </>
  );
}

export default AdminList