import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { rejectTopic } from '../ApiHandler';
import NotificationService from './NotificationService/NotificationService';

export default function FormDialog({
    open,
    setOpen,
    onDeleteAllRows,
}) {
  
  const [rejectAllComment, setRejectAllComment] = React.useState('');
  const [isCommentValid, setIsCommentValid] = React.useState(true);
  const { handleNotification, NotificationComponent } = NotificationService();
  const handleNotifyClick = (notiMsg, severity) => {
    handleNotification(notiMsg, severity);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    if (newComment.length <= 500) {
      setRejectAllComment(newComment);
      setIsCommentValid(true);
    } else {
      setIsCommentValid(false);
    }
  };
  const handleConfirmRejectAll = async (rejectAllComment) => {
    if  (rejectAllComment.trim() !== '' ) {
      
      const body={
        operator_comments: rejectAllComment,
        operator_name: "Dummy for timeBeing: waiting for SSO IP integration",
        markForDelete: 1
      }
      const params = {

        // Replace with actual stage name that is selected  "sourceTopicName": ""
        topic_name: 'ENU.META.METAVAL.PROCESS.INITIATION.V1',
      }

      rejectTopic(body, params).then( response => {
        if (response.status === 200) {
          onDeleteAllRows();
          handleNotifyClick('All packets updated', 'success');
        } else {
          console.error('Error sending data:', response.statusText);
          handleNotifyClick("Packets did not updated", 'error')
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
          id='new-rejectComment'
          style={{ width: '350px', margin: 'auto',fontSize: 'small', fontWeight: 'lighter'  }}
          label='Comment'
          multiline
          minRows={3}
          maxRows={5}
          focused
          fullWidth
          autoFocus
          value={rejectAllComment}
          onChange={handleCommentChange}
          error={!isCommentValid}
          helperText={!isCommentValid ? 'Comment is required and should be within 500 characters' : ''}
        />
        <DialogActions>
          <Button onClick={handleClose} style={{ textTransform: 'capitalize', fontSize: 'small',fontWeight: 'lighter'  }}>
            Cancel
          </Button>
          <Button onClick={()=>{handleConfirmRejectAll(rejectAllComment)}} style={{ color: 'red', textTransform: 'capitalize', fontSize: 'small', fontWeight: 'lighter' }}>
            Confirm Reject All
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}