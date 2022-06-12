export default class Image {
  static image = (storageRef, imageURL, isMain) => {
    return {
      storageRef: storageRef,
      url: imageURL,
      main: isMain,
    };
  };
}
