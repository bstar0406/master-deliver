import React from "react";
import { H3 } from "../../GlobalStyles";
import { CSVReader } from "react-papaparse";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 30%;
`;

// Subcomponent of the add recipient list page, to upload the CSV containing the recipients
const UploadCSV = ({setRecipients}) => {
    const handleOnDrop = (data) => {
      setRecipients(data)
    }
  
    const handleOnError = (err, file, inputElem, reason) => {
      // TODO: YB: handle error: Display dialog?
      console.log(err)
    }
  
    const handleOnRemoveFile = (data) => {
      setRecipients(null)
    }

    return (
      <>
        <div style={{ marginBottom:25 }}>
          <H3>Upload CSV with recipient details</H3>
        </div>
        <Wrapper>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}
          >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>

        <div style={{ marginTop: 20, textAlign:"center"}}>
          Note: CSV must be organized with first column as First Name, Last Name, Phone Number, Email, Shipping Address
        </div>
        </Wrapper>
      </>
    );
  };
  
  export default UploadCSV;