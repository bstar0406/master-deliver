import React from "react";
import List from "@material-ui/core/List";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMiniImagePopUp,
  setProductImages,
  setProductMainImageURL,
} from "../../../actions";

const SimpleDialog = ({
  onClose,
  selectedValue,
  open,
  newProductListingImages,
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose();
  };

  const handleDeleteImage = () => {
    const filteredImageArray = newProductListingImages.filter(
      (image) => image !== selectedValue
    );
    dispatch(setProductImages(filteredImageArray));
    dispatch(setProductMainImageURL(filteredImageArray[0]));
    onClose();
  };

  const handleMakeDefaultImage = () => {
    const imageIndex = newProductListingImages.findIndex(
      (image) => image === selectedValue
    );
    newProductListingImages.unshift(newProductListingImages[imageIndex]);
    newProductListingImages.splice(imageIndex + 1, 1);

    dispatch(setProductImages(newProductListingImages));
    dispatch(setProductMainImageURL(newProductListingImages[0]));
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">
        Delete / Make image main{" "}
      </DialogTitle>
      <List>
        <button onClick={() => handleDeleteImage()}>DELETE IMAGE</button>
        <button onClick={() => handleMakeDefaultImage()}>
          MAKE PRIMARY IMAGE
        </button>
      </List>
    </Dialog>
  );
};

const MiniImagePopUp = (event) => {
  const dispatch = useDispatch();
  const handleClosingPopUp = () => {
    dispatch(toggleMiniImagePopUp());
  };

  const openPopUpState = useSelector(
    (state) => state.MiniImagePopUpReducer.open
  );

  const imageValueFromPopUpState = useSelector(
    (state) => state.MiniImagePopUpReducer.image
  );

  const newProductListingImageState = useSelector(
    (state) => state.newProductListingReducer.images
  );

  return (
    <div>
      <SimpleDialog
        selectedValue={imageValueFromPopUpState}
        open={openPopUpState}
        onClose={handleClosingPopUp}
        newProductListingImages={newProductListingImageState}
      />
    </div>
  );
};

export default MiniImagePopUp;
