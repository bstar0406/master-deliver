import React from "react";
import {
  LeftBigImage,
  ImageWrapper,
  MiniImageWrapper,
  MiniImage,
  ImageInput,
} from "../../../../styles_folder/vendorStyles/NewProductListingStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMiniImagePopUp,
  setProductImages,
  setProductMainImageURL,
} from "../../../../actions";
import { selectImage } from "../../../../hooks/vendor-hooks";

const ImageUploadAndDisplay = () => {
  const dispatch = useDispatch();

  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );

  const handleClickOnMiniImage = (e) => {
    dispatch(toggleMiniImagePopUp(e.target.src));
  };

  const handleImageChange = (e) => {
    const image = selectImage(e);
    dispatch(setProductImages(image));
    dispatch(setProductMainImageURL(image[0]));
  };

  return (
    <>
      <LeftBigImage
        src={
          newProductListingState.mainImageURL
            ? newProductListingState.mainImageURL
            : null
        }
      />
      <ImageWrapper>
        <ImageInput
          type="file"
          multiple={true}
          accept="image/x-png,image/gif,image/jpeg"
          onChange={handleImageChange}
          title=" "
        ></ImageInput>
        <MiniImageWrapper>
          {newProductListingState.images
            ? newProductListingState.images.map((image, i) => {
                const imageSource = image.url ? image.url : image;
                return (
                  <MiniImage
                    key={i}
                    alt="your inputted file"
                    src={imageSource}
                    onClick={(e) => handleClickOnMiniImage(e)}
                  ></MiniImage>
                );
              })
            : null}
        </MiniImageWrapper>
      </ImageWrapper>
    </>
  );
};

export default ImageUploadAndDisplay;
