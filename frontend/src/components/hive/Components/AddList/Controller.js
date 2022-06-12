import * as React from "react";

import Template from "./Template";

const AddListController = (props) => {
  
  return (
    <Template
      setPage={props.setPage}
      boxName={props.boxName}
      changeBoxName={props.changeBoxName}
      file={props.file}
      fileRef={props.fileRef}
      getFile={props.getFile}
      goListDetail={props.goListDetail}
    />
  );
};
export default AddListController;