import { useFirestore, useUser } from "reactfire";
import { useSelector } from "react-redux";

export const useBoxData = () => {
  const { selectedList } = useSelector((state) => state.recipientListReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { name, boxId, lastUpdatedTimestamp } = useSelector(
    (state) => state.boxInfoReducer
  );

  // TODO: YB: validate some of this data?
  const { budgetPrice, totalPrice } = useSelector(
    (state) => state.budgetBoxReducer
  );
  const { shipDate } = useSelector((state) => state.datesIdReducer);
  const { data: user } = useUser();

  const userBoxes = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("boxes");

  return {
    selectedList,
    cartItems,
    name,
    boxId,
    lastUpdatedTimestamp,
    budgetPrice,
    totalPrice,
    shipDate,
    userBoxes,
  };
};

export const useAdminOrdersAndVendorsCollection = () => {
  const adminOrders = useFirestore()
    .collection("admin")
    .doc("main")
    .collection("orders");
  const vendorsCollection = useFirestore().collection("vendors");

  return { adminOrders, vendorsCollection };
};
