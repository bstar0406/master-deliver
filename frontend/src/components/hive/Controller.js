import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../Shared/WindowSize";

const HiveController = (props) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const setPage = (number) => {
    setCurrentPage(number);
  };
  const [boxName, setBoxName] = React.useState("");
  const changeBoxName = (name) => {
    setBoxName(name);
  };
  const [file, setFile] = React.useState(null)
  const fileRef = React.useRef(null);
  const getFile = ()=>{
    if(fileRef.current.files.length>0)setFile(fileRef.current.files[0]);
    else setFile(null);
  }
  const goListDetail=()=>{
    if(boxName!==""&&file!==null){
      setPage(2);
    }
  }
  return (
    <Template
      GetSize={GetSize}
      setPage={setPage}
      currentPage={currentPage}
      boxName={boxName}
      changeBoxName={changeBoxName}
      file={file}
      fileRef={fileRef}
      getFile={getFile}
      goListDetail={goListDetail}
    />
  );
};
export default HiveController;
