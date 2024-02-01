import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { resubmit } from '../ApiHandler';
import NotificationService from './NotificationService/NotificationService';
export default function DialogResubmit({onResubCommentSubmit,
    open,
    setOpen,
    row,
    setRows
}) {
  
  const [resubmitComment, setResubmitComment] = React.useState('');
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
      setResubmitComment(newComment);
      setIsCommentValid(true);
    } else {
      setIsCommentValid(false);
    }
  };

  const handleConfirmResubmit = async (resubmitComment) => {
    if  (resubmitComment.trim() !== '' ) {
      const body={
        operator_comments: resubmitComment,
        operator_name: "Dummy for timeBeing: waiting for SSO IP integration",
        refid: row.refid,
        markForDelete: 0
      }
      resubmit(body).then(
        response => {
          if (response.status === 200) {
            setRows((prevRow) => prevRow.filter((r) => r.refid !== row.refid));
            handleNotifyClick('Packet updated', 'success');
          } else {
            console.error('Error sending data via resubmit:', response.statusText);
            handleNotifyClick('Packet not updated', 'error')
          }
        }
      ).catch(error => {
        console.error('Error:', error);
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
          id='new-Comment'
          style={{ width: '350px', margin: 'auto',fontSize: 'small', fontWeight: 'lighter'  }}
          label='Comment'
          multiline
          minRows={3}
          maxRows={5}
          focused
          fullWidth
          autoFocus
          value={resubmitComment}
          onChange={handleCommentChange}
          error={!isCommentValid}
          helperText={!isCommentValid ? 'Comment is required and should be within 500 characters' : ''}
        />
        <DialogActions>
          <Button onClick={handleClose} style={{ textTransform: 'capitalize', fontSize: 'small',fontWeight: 'lighter'  }}>
            Cancel
          </Button>
          <Button onClick={()=>{handleConfirmResubmit(resubmitComment)}} style={{ color: 'green', textTransform: 'capitalize', fontSize: 'small', fontWeight: 'lighter' }}>
            Confirm Resubmit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

