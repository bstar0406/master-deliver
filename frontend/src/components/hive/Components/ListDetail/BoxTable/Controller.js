import * as React from "react";

import Template from "./Template";

const items = [
  { alert: false, fName: "Sam", sName: "Johnson", phoneNumber: "(123)345-67890", shippingAddress: "123 Address St, City, ON, M7U 7C7" },
  { alert: false, fName: "Sam", sName: "Johnson", phoneNumber: "(123)345-67890", shippingAddress: "123 Address St, City, ON, M7U 7C7" },
  { alert: true, fName: "", sName: "Johnson", phoneNumber: "(123)345-67890", shippingAddress: "123 Address St, City, ON, M7U 7C7" },
];

const BoxTableController = (props) => {
  return (
    <Template
      items={items}
    />
  );
};
export default BoxTableController;
