
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./NotificationService.css";

const NotificationService = () => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleNotification = (message, severity) => {
    let icon;
    let backgroundColor; 

    switch (severity) {
      case "info":
        icon = <InfoIcon />;
        backgroundColor = "#1769aa"; //blue
        break;
      case "error":
        icon = <ErrorIcon />;
        backgroundColor = "#aa2e25"; //red
        break;
      case "warning":
        icon = <WarningIcon />;
        backgroundColor = "#b26a00"; //orange
        break;
      case "success":
        icon = <CheckCircleIcon />;
        backgroundColor = "#357a38"; //green
        break;
      default:
        icon = null;
        backgroundColor = "#b0bec5"; // Default color gray if severity not given
    }

    setSnackPack((prev) => [
      ...prev,
      { message, severity, key: new Date().getTime(), icon, backgroundColor },
    ]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const NotificationComponent = (
    <div className="snackbar-container" style={{ position: 'relative' }}>
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={1000}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
      message={messageInfo ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          {messageInfo.icon}
          <span style={{ marginLeft: "8px" }}>{messageInfo.message}</span>
        </div>
      ) : null}
      ContentProps={{
        style: {
          backgroundColor: messageInfo ? messageInfo.backgroundColor : "gray",
          height: "75px",
          width: "380px",
        },
      }}
      action={
        <React.Fragment>
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </React.Fragment>
      }
    />
  </div>
  );

  return { handleNotification, NotificationComponent };
};

export default NotificationService;