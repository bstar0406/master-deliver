import * as React from "react";

import Template from "./Template";

const items = [
  { name: "August Wellness box", id: "123456789", createdDate: "01 Jul 2021 06:11 AM", recipient: "ListName (#)", status: 0, shippingDate: "01 Aug 2021" },
  { name: "July box", id: "123456789", createdDate: "01 Jul 2021 06:11 AM", recipient: "ListName (#)", status: 1, shippingDate: "01 Aug 2021" },
  { name: "June party box", id: "123456789", createdDate: "01 Jul 2021 06:11 AM", recipient: "ListName (#)", status: 2, shippingDate: "01 Aug 2021" },
];

const BoxTableController = (props) => {
  return (
    <Template
      items={items}
    />
  );
};
export default BoxTableController;
