import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { reject } from '../ApiHandler';
import NotificationService from './NotificationService/NotificationService';

export default function FormDialog({onCommentSubmit,
    open,
    setOpen,
    row,
    setRows
}) {
  
  const [rejectComment, setRejectComment] = React.useState('');
  const [isCommentValid, setIsCommentValid] = React.useState(true);
  const { handleNotification, NotificationComponent } = NotificationService();
  const handleNotifyClick = (notiMsg, severity) => {
    handleNotification(notiMsg, severity);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    if (newComment.length <= 500) {
      setRejectComment(newComment);
      setIsCommentValid(true);
    } else {
      setIsCommentValid(false);
    }
  };
  const handleConfirmReject = async (rejectComment) => {
    if  (rejectComment.trim() !== '' ) {
      const body={
        operator_comments: rejectComment,
        operator_name: "Dummy for timeBeing: waiting for SSO IP integration",
        refid: row.refid,
        markForDelete: 1
      }

      reject(body).then( response => {
        if (response.status === 200) {
          setRows((prevRow) => prevRow.filter((r) => r.refid !== row.refid));
          handleNotifyClick('Packet updated', 'success');
        } else {
          console.error('Error sending data:', response.statusText);
          handleNotifyClick('Packet not updated', 'error')
        }
      }).catch(error => {
        console.error('Error in handleConfirmReject: ', error);
      })
      handleClose();
    } else {
      setIsCommentValid(false);
    }
  };

  return (
    <React.Fragment>
      {NotificationComponent}
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "400px",
            },
          },
        }}
      >
        <DialogTitle>
        </DialogTitle>
        <TextField
          id='new-rejectComment'
          style={{ width: '350px', margin: 'auto',fontSize: 'small', fontWeight: 'lighter'  }}
          label='Comment'
          multiline
          minRows={3}
          maxRows={5}
          focused
          fullWidth
          autoFocus
          value={rejectComment}
          onChange={handleCommentChange}
          error={!isCommentValid}
          helperText={!isCommentValid ? 'Comment is required and should be within 500 characters' : ''}
        />
        <DialogActions>
          <Button onClick={handleClose} style={{ textTransform: 'capitalize', fontSize: 'small',fontWeight: 'lighter'  }}>
            Cancel
          </Button>
          <Button onClick={()=>{handleConfirmReject(rejectComment)}} style={{ color: 'red', textTransform: 'capitalize', fontSize: 'small', fontWeight: 'lighter' }}>
            Confirm Reject
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
