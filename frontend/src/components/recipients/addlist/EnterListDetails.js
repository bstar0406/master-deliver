import React from "react";
import { H3 } from "../../GlobalStyles";
import TextField from "@material-ui/core/TextField";

// Subcomponent of the add recipient list page, to enter the global details of the list
const EnterListDetails = ({listName, setListName, companyName, setCompanyName}) => {
    return (
        <>
          <H3>Enter list details</H3>
          <TextField
            style={{ width:"30%", align:"center", marginTop:20, marginBottom:10 }}
            id="outlined-secondary"
            variant="outlined"
            placeholder="List Name"
            size="small"
            value={listName}
            onChange={v => setListName(v.target.value)}
          />
          <TextField
            style={{ width:"30%", align:"center", marginBottom:25 }}
            id="outlined-secondary"
            variant="outlined"
            placeholder="Company Name"
            size="small"
            value={companyName}
            onChange={v => setCompanyName(v.target.value)}
          />
        </>
      );
  };
  
  export default EnterListDetails;