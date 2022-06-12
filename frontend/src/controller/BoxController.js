import Box from "../model/Box";

export const saveBoxWithCurrentData = (
  selectedList,
  cartItems,
  name,
  boxId,
  budgetPrice,
  totalPrice,
  shipDate,
  userBoxes
) => {
  const shipmentDatePeriod = shipDate.id;

  const isNewBox = boxId === null || boxId === undefined;

  // TODO: YB: box size, confirmation date should be dynamically computed
  const box = Box.draftBox(
    cartItems,
    1,
    shipmentDatePeriod,
    1,
    budgetPrice,
    totalPrice,
    selectedList,
    name,
    isNewBox
  );

  userBoxes.doc(boxId).set(box, { merge: true });
};

export const submitBoxWithCurrentData = (
  selectedList,
  cartItems,
  name,
  boxId,
  budgetPrice,
  totalPrice,
  shipDate,
  userBoxes,
  adminOrders,
  vendorsCollection
) => {
  const shipmentDatePeriod = shipDate.id;

  const isNewBox = boxId === null || boxId === undefined;

  // TODO: YB: box size, confirmation date should be dynamically computed
  const box = Box.completedBox(
    cartItems,
    1,
    shipmentDatePeriod,
    1,
    budgetPrice,
    totalPrice,
    selectedList,
    name,
    isNewBox
  );

  const handleBoxSubmission = (boxId) => {
    // set a reference in our admin DB so we know what orders should be fulfilled for a given shipment period
    const adminOrdersForCurrentPeriodRef = adminOrders.doc(
      shipmentDatePeriod.toString()
    );
    // TODO: YB: can we refactor this?
    adminOrdersForCurrentPeriodRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const docData = doc.data();
          const orders = docData.orders;
          orders.push(boxId);
          docData.orders = orders;
          adminOrdersForCurrentPeriodRef.update({
            orders: orders,
          });
        }
      })
      .catch((error) => console.error(error));

    const cartItemsByVendor = {};
    for (const item of cartItems) {
      if (!cartItemsByVendor[item.vendorId]) {
        cartItemsByVendor[item.vendorId] = [];
      }
      cartItemsByVendor[item.vendorId].push(item);
    }

    // TODO: YB: use firestore transactions to guard against concurrency issues
    for (const vendorId in cartItemsByVendor) {
      const vendorOrdersRef = vendorsCollection
        .doc(vendorId)
        .collection("orders")
        .doc(shipmentDatePeriod.toString());

      vendorOrdersRef.get().then((doc) => {
        if (doc.exists) {
          const vendorOrdersData = doc.data();

          cartItemsByVendor[vendorId].forEach((item) => {
            const productId = item.productInfo.id;
            // TODO: YB: refactor this
            if (vendorOrdersData[productId]) {
              const productData = vendorOrdersData[productId];
              productData.quantity += item.quantity;
              vendorOrdersData[productId] = productData;
            } else {
              vendorOrdersData[productId] = {
                quantity: item.quantity,
                status: "unfulfilled",
              };
            }
          });

          vendorOrdersRef.set(vendorOrdersData);
        }
      });
    }

    // TODO: YB: update nextShipmentDate of recipientList?
    // only do it if the box is active? - and think of other spots we'll need to update it
  };

  if (boxId) {
    userBoxes.doc(boxId).set(box, { merge: true });
    handleBoxSubmission(boxId);
  } else {
    userBoxes
      .add(box)
      .then((docRef) => {
        handleBoxSubmission(docRef.id);
      })
      .catch((error) => console.error("Error adding document: ", error));
  }
};
