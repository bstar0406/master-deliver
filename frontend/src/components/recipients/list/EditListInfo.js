import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// Edit a recipient list information
const EditListInfo = ({isOpen, listName, companyName, handleClose, handleSave}) => {
  const [listNameState, setListNameState] = React.useState(listName)
  const [companyNameState, setCompanyNameState] = React.useState(companyName)

  const cancelAndClose = () => {
      setListNameState(listName)
      setCompanyNameState(companyName)
      handleClose()
  }

  const saveAndClose = () => {
      handleSave(listNameState, companyNameState)
  }

  return (
    <>
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Company Information</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="listName"
                label="List Name"
                type="string"
                fullWidth
                value={listNameState}
                onChange={v => setListNameState(v.target.value)}
                />
                <TextField
                autoFocus
                margin="dense"
                id="companyName"
                label="Company Name"
                type="string"
                fullWidth
                value={companyNameState}
                onChange={v => setCompanyNameState(v.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={cancelAndClose} color="primary">
                Cancel
                </Button>
                <Button onClick={saveAndClose} color="primary">
                Save
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
}

export default EditListInfo;