import firebase from "firebase/app";

export default class RecipientList {
  // This method returns a new RecipientList object.
  // It defaults to activeBoxes set to 0, nextShipmentDate set to null, and the createdDate set to the current timestamp.
  static recipientList = (listName, companyName, recipients) => {
    return {
      name: listName,
      companyName: companyName,
      activeBoxes: 0,
      recipients: recipients,
      nextShipmentDate: null,
      createdDate: firebase.firestore.FieldValue.serverTimestamp(),
    };
  };
}
