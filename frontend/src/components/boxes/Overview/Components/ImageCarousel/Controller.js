import * as React from "react";

import Template from "./Template";
const ImageCarouselController = (props) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const chooseImage = (number) => {
    setCurrentImage(number);
  }
  return <Template item={props.item} currentImage={currentImage} chooseImage={chooseImage} />;
};
export default ImageCarouselController;
