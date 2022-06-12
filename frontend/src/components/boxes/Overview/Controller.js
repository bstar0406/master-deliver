import * as React from "react";

import {
  useUserBoxesCollection,
  useUserBoxesData,
} from "../../../hooks/box-hooks";
import { createNewBox } from "../../../controller/BoxController";
import { useHistory } from "react-router-dom";
import { GetSize } from "../../../Shared/WindowSize";

import Template from "./Template";

const OverviewController = () => {
  const history = useHistory();
  const userBoxes = useUserBoxesCollection();
  const { data } = useUserBoxesData();

  const startNewBox = async () => {
    const newBoxDocument = await createNewBox(userBoxes);
    history.push("/boxes/" + newBoxDocument.id);
  };

  const viewBox = (box) => {
    history.push("/boxes/" + box.id);
  };

  const [currentPage, setCurrentPage] = React.useState(0);
  const changePage = (number) => {
    setCurrentPage(number);
  };
  return (
    <Template
      currentPage={currentPage}
      changePage={changePage}
      startNewBox={startNewBox}
      boxesData={data}
      viewBox={viewBox}
      GetSize={GetSize}
    />
  );
};
export default OverviewController;
