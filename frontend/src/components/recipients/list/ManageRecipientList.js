import React from "react";
import styled from "styled-components";
import AddNewRecipientButton from "./AddNewRecipientButton";
import ManageRecipient from "./ManageRecipient";
import EditListInfo from "./EditListInfo";
import DeleteListDialog from "./DeleteListDialog";
import DeleteRecipientsDialog from "./DeleteRecipientsDialog";
import { H3 } from "../../GlobalStyles";
import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
} from "@material-ui/data-grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useFirestore, useUser } from "reactfire";
import Button from "@material-ui/core/Button";
import Address from "../../../model/Address";
import Recipient from "../../../model/Recipient";

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem;
  height: 8vhy;
  width: 100%;
`;

const TopLeftInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 2rem;
`;

const TopRightInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-right: 2rem;
`;

const TopCenterInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopCenterBottomInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
`;

const H1 = styled.h1`
  font-weight: lighter;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .boxbee.valid": {
      backgroundColor: "green",
    },
    "& .boxbee.invalid": {
      backgroundColor: "red",
    },
    "& .boxbee.corrected": {
      backgroundColor: "orange",
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const columns = [
  { field: "firstName", headerName: "First Name", type: "string", width: 150 },
  { field: "lastName", headerName: "Last Name", type: "string", width: 150 },
  { field: "phone", headerName: "Phone Number", type: "string", width: 150 },
  { field: "email", headerName: "Email", type: "string", width: 200 },
  {
    field: "address",
    headerName: "Shipping Address",
    type: "string",
    width: 400,
    valueFormatter: ({ value }) => Address.getFormattedAddress(value),
    cellClassName: (params) =>
      clsx("boxbee", {
        valid: Address.isValid(params.value),
        invalid: Address.isInvalid(params.value),
        corrected: Address.isCorrected(params.value),
      }),
  },
];

const ListWrapper = styled.div`
  display: flex;
  width: 90%;
`;

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      <GridFilterToolbarButton />
    </GridToolbarContainer>
  );
}

function popoverElementForRow(rowParams) {
  if (rowParams && !Address.isValid(rowParams.row.address)) {
    const errors = rowParams.row.address.errors;
    return Object.keys(errors).map((key) => {
      return <Typography key={key}>{errors[key]}</Typography>;
    });
  }
  return "";
}

// TODO: YB: add some kind of cue to click to edit & avoid the checkbox selection on row click

// Page to manage a recipient list
const ManageRecipientList = ({ listData, backButtonCallback }) => {
  const [userToEdit, setUserToEdit] = React.useState(null);
  const [shouldAddNewRecipient, setShouldAddNewRecipient] = React.useState(
    false
  );
  const [editListInfo, setShouldEditListInfo] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [
    openDeleteRecipientsDialog,
    setOpenDeleteRecipientsDialog,
  ] = React.useState(false);
  const [addressPopoverCell, setAddressPopoverCell] = React.useState(null);

  const { data: user } = useUser();
  const listDocument = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("recipient-lists")
    .doc(listData.id);

  const addNewRecipient = () => {
    setShouldAddNewRecipient(true);
  };

  const handleRowClicked = ({ row }) => {
    setUserToEdit(row);
  };

  const handleCloseRecipientPopup = () => {
    setShouldAddNewRecipient(false);
    setUserToEdit(null);
  };

  const handleSaveRecipientPopup = async (recipient) => {
    const updatedRecipients = listData.recipients;
    if (shouldAddNewRecipient) {
      // add the new recipient to array of recipients
      updatedRecipients.push(recipient);
    } else {
      // make an update to the existing recipient
      const recipientIndex = updatedRecipients.findIndex(
        (x) => x.id === recipient.id
      );
      updatedRecipients[recipientIndex] = recipient;
    }
    listDocument.update({
      recipients: updatedRecipients,
    });

    setShouldAddNewRecipient(false);
    setUserToEdit(null);
  };

  const openEditListInfoPopup = () => {
    setShouldEditListInfo(true);
  };

  const closeEditListInfoPopup = () => {
    setShouldEditListInfo(false);
  };

  const updateListInfo = async (listName, companyName) => {
    listDocument.update({
      name: listName,
      companyName: companyName,
    });

    closeEditListInfoPopup();
  };

  const handleClickDeleteList = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDeleteList = () => {
    handleCloseDeleteDialog();

    listDocument.delete();
  };

  const handleClickDeleteRecipients = () => {
    setOpenDeleteRecipientsDialog(true);
  };

  const handleCloseDeleteRecipientsDialog = () => {
    setOpenDeleteRecipientsDialog(false);
  };

  const handleDeleteRecipients = () => {
    handleCloseDeleteRecipientsDialog();

    const result = listData.recipients.filter(
      (recipient) => -1 === selectedRows.indexOf(recipient.id)
    );

    listDocument.update({
      recipients: result,
    });

    setSelectedRows([]);
  };

  const cellHoverCallback = (params) => {
    if (params.field === "address") {
      setAddressPopoverCell(params);
    } else {
      handlePopoverClose();
    }
  };

  const handlePopoverClose = () => {
    setAddressPopoverCell(null);
  };

  const openPopover = addressPopoverCell
    ? !Address.isValid(addressPopoverCell.row.address)
    : false;

  const openDialog = userToEdit !== null || shouldAddNewRecipient === true;

  let userToPass = userToEdit;
  if (userToPass === null) {
    userToPass = Recipient.emptyRecipient();
  }

  const classes = useStyles();

  return (
    <>
      <TopWrapper>
        <TopLeftInnerWrapper>
          <Button
            variant="outlined"
            color="primary"
            onClick={backButtonCallback}
          >
            Back
          </Button>
          <AddNewRecipientButton buttonClickedCallback={addNewRecipient} />
        </TopLeftInnerWrapper>
        <TopCenterInnerWrapper>
          <H1 style={{ paddingBottom: 20 }}>Manage Recipient List</H1>
          <TopCenterBottomInnerWrapper>
            <H3>{listData.name}</H3>
            <H3>{listData.companyName}</H3>
            <Button
              variant="outlined"
              color="primary"
              onClick={openEditListInfoPopup}
            >
              Edit
            </Button>
          </TopCenterBottomInnerWrapper>
        </TopCenterInnerWrapper>
        <TopRightInnerWrapper>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickDeleteList}
            style={{ paddingRight: 20 }}
          >
            Delete List
          </Button>
          <DeleteListDialog
            open={openDeleteDialog}
            handleCloseCallback={handleCloseDeleteDialog}
            handleDeleteCallback={handleDeleteList}
          />
        </TopRightInnerWrapper>
      </TopWrapper>

      <ListWrapper className={classes.root} onMouseLeave={handlePopoverClose}>
        <DataGrid
          checkboxSelection
          rows={listData.recipients}
          columns={columns}
          pageSize={6}
          autoHeight
          disableDensitySelector
          disableExportSelector
          onRowClick={handleRowClicked}
          onSelectionModelChange={({ selectionModel }) => {
            setSelectedRows(selectionModel);
          }}
          onCellHover={cellHoverCallback}
          onCellLeave={handlePopoverClose}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </ListWrapper>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={openPopover}
        anchorEl={addressPopoverCell ? addressPopoverCell.element : null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {popoverElementForRow(addressPopoverCell)}
      </Popover>

      {selectedRows.length > 0 && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClickDeleteRecipients}
        >
          Delete Recipients
        </Button>
      )}
      <DeleteRecipientsDialog
        open={openDeleteRecipientsDialog}
        handleCloseCallback={handleCloseDeleteRecipientsDialog}
        handleDeleteCallback={handleDeleteRecipients}
      />

      {openDialog && (
        <ManageRecipient
          isOpen={openDialog}
          shouldAddNewRecipient={shouldAddNewRecipient}
          userInfo={userToPass}
          handleClose={handleCloseRecipientPopup}
          handleSave={handleSaveRecipientPopup}
        />
      )}

      {editListInfo && (
        <EditListInfo
          isOpen={editListInfo}
          listName={listData.name}
          companyName={listData.companyName}
          handleClose={closeEditListInfoPopup}
          handleSave={updateListInfo}
        />
      )}
    </>
  );
};

export default ManageRecipientList;
