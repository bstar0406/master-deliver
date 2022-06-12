import * as React from "react";

import RecipientList from "./Components/RecipientList";
import AddList from "./Components/AddList";
import ListDetail from "./Components/ListDetail";
const Template = (props) => {
  return (
    <div className="scroll-step2" style={{ height: props.GetSize().height - 200, paddingLeft: '30px' }}>
      {props.currentPage === 0 && <RecipientList setPage={props.setPage} />}
      {props.currentPage === 1 && <AddList setPage={props.setPage} boxName={props.boxName}
        changeBoxName={props.changeBoxName}
        file={props.file}
        fileRef={props.fileRef}
        getFile={props.getFile}
        goListDetail={props.goListDetail} />}
      {props.currentPage === 2 && <ListDetail setPage={props.setPage} boxName={props.boxName} />}
    </div>
  );
};
export default Template;