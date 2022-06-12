import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { firebaseConfig } from "../../../helpers/firebase";
import Address from "../../../model/Address";
import Recipient from "../../../model/Recipient";

// Manage a single recipient's info
const ManageRecipient = ({
  isOpen,
  shouldAddNewRecipient,
  userInfo,
  handleClose,
  handleSave,
}) => {
  const [recipient, setRecipient] = useState(userInfo);
  const [saveButtonEnabled, setSaveButtonEnabled] = useState(true);

  const googleAddressChanged = (address) => {
    // disable the save button until we load the result
    setSaveButtonEnabled(false);

    geocodeByPlaceId(address.value.place_id)
      .then((results) => {
        const cleanedAddress = Address.addressFromGoogleAddress(results[0]);
        let copyRecipient = Recipient.recipientWithUpdatedAddress(
          recipient,
          cleanedAddress
        );
        setRecipient(copyRecipient);

        setSaveButtonEnabled(true);
      })
      .catch((error) => {
        setSaveButtonEnabled(true);
        console.error(error);
      });
  };

  let title = shouldAddNewRecipient ? "Add new recipient" : "Modify recipient";

  const cancelAndClose = () => {
    setRecipient(userInfo);
    handleClose();
  };

  const saveAndClose = () => {
    handleSave(recipient);
  };

  const googleLoadFailed = () => {
    // TODO: YB: display error popup
  };

  const defaultAddress = () => {
    if (Address.isInvalid(recipient.address)) {
      return "";
    } else {
      return recipient.address.fullAddress;
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First name"
            type="string"
            value={recipient.firstName}
            onChange={(v) => {
              let copyRecipient = { ...recipient, firstName: v.target.value };
              setRecipient(copyRecipient);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last name"
            type="string"
            value={recipient.lastName}
            onChange={(v) => {
              let copyRecipient = { ...recipient, lastName: v.target.value };
              setRecipient(copyRecipient);
            }}
          />
          <GooglePlacesAutocomplete
            apiKey={firebaseConfig.apiKey}
            selectProps={{
              onChange: googleAddressChanged,
              maxMenuHeight: 100,
              placeholder: "Shipping address...",
              defaultInputValue: defaultAddress(),
            }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["ca"],
              },
            }}
            onLoadFailed={googleLoadFailed}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="string"
            fullWidth
            value={recipient.phone}
            onChange={(v) => {
              let copyRecipient = { ...recipient, phone: v.target.value };
              setRecipient(copyRecipient);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="string"
            fullWidth
            value={recipient.email}
            onChange={(v) => {
              let copyRecipient = { ...recipient, email: v.target.value };
              setRecipient(copyRecipient);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelAndClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={saveAndClose}
            color="primary"
            enabled={saveButtonEnabled.toString()}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ManageRecipient;
