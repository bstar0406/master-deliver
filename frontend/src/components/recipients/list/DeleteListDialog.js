import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const DeleteListDialog = ({open, handleCloseCallback, handleDeleteCallback}) => {
  return (
      <>
        <Dialog
            open={open}
            onClose={handleCloseCallback}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{"Delete this list"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Are you sure you want to delete this list? The data will not be recoverable.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleDeleteCallback} color="primary">
                Delete
            </Button>
            <Button onClick={handleCloseCallback} color="primary" autoFocus>
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
      </>
  )
}

export default DeleteListDialog;