import firebase from "firebase/app";

export default class Box {
  // This method returns a new Box object.
  // The confirmationDatePeriod and shipmentDatePeriod are given as integers, representing a given fixed date.
  static box = (
    items,
    status,
    confirmationDatePeriod,
    shipmentDatePeriod,
    totalWeight,
    totalCostPerBox,
    budgetPrice,
    totalPrice,
    boxSize,
    recipients,
    boxName,
    isNewBox
  ) => {
    const boxObject = {
      items: items,
      status: status,
      confirmationDatePeriod: confirmationDatePeriod,
      shipmentDatePeriod: shipmentDatePeriod,
      totalWeight: totalWeight,
      totalCostPerBox: totalCostPerBox,
      boxSize: boxSize,
      budgetTotal: totalPrice,
      budgetPrice: budgetPrice,
      updatedDate: firebase.firestore.FieldValue.serverTimestamp(),
      recipients: recipients,
      name: boxName,
    };
    // only add a createdDate field when the box gets created for the first time
    if (isNewBox) {
      boxObject.createdDate = firebase.firestore.FieldValue.serverTimestamp();
    }
    return boxObject;
  };

  static boxWithValues = (
    cartItems,
    boxSize,
    shipmentDatePeriod,
    confirmationDatePeriod,
    budgetPrice,
    budgetTotal,
    recipients,
    boxName,
    status,
    isNewBox
  ) => {
    var totalWeight = 0;
    var totalCostPerBox = 0;
    cartItems.forEach((item) => {
      totalCostPerBox += item.productInfo.price;
      totalWeight += item.productInfo.weight;
    });

    return this.box(
      cartItems,
      status,
      confirmationDatePeriod,
      shipmentDatePeriod,
      totalWeight,
      totalCostPerBox,
      budgetPrice,
      budgetTotal,
      boxSize,
      recipients,
      boxName,
      isNewBox
    );
  };

  static completedBox = (
    cartItems,
    boxSize,
    shipmentDatePeriod,
    confirmationDatePeriod,
    budgetPrice,
    budgetTotal,
    recipients,
    boxName,
    isNewBox
  ) => {
    return this.boxWithValues(
      cartItems,
      boxSize,
      shipmentDatePeriod,
      confirmationDatePeriod,
      budgetPrice,
      budgetTotal,
      recipients,
      boxName,
      "completed",
      isNewBox
    );
  };

  static draftBox = (
    cartItems,
    boxSize,
    shipmentDatePeriod,
    confirmationDatePeriod,
    budgetPrice,
    budgetTotal,
    recipients,
    boxName,
    isNewBox
  ) => {
    return this.boxWithValues(
      cartItems,
      boxSize,
      shipmentDatePeriod,
      confirmationDatePeriod,
      budgetPrice,
      budgetTotal,
      recipients,
      boxName,
      "draft",
      isNewBox
    );
  };
}
