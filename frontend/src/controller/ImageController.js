import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import Image from "../model/Image";

export const uploadImageFromBlob = async (blobURL) => {
  console.log(blobURL);
  const storage = firebase.storage();
  const storageRef = storage.ref().child(uuidv4());
  let blob = await fetch(blobURL).then((r) => r.blob());
  return storageRef.put(blob).then(() => {
    return storageRef.getDownloadURL().then((downloadURL) => {
      return Image.image(storageRef.toString(), downloadURL, true);
    });
  });
};
