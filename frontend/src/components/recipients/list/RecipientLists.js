import * as React from "react";
import styled from "styled-components";
import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
} from "@material-ui/data-grid";

const ListWrapper = styled.div`
  display: flex;
  width: 90%;
`;

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateFormatter = new Intl.DateTimeFormat("en-US", options);

const dateFormat = {
  valueFormatter: ({ value }) => {
    const date = value
      ? dateFormatter.format(value.toDate())
      : "No shipment planned";
    return date;
  },
};

function getNumRecipients(params) {
  return params.row.recipients.length;
}

const columns = [
  { field: "name", headerName: "Name", type: "string", width: 190 },
  {
    field: "companyName",
    headerName: "Company Name",
    type: "string",
    width: 190,
  },
  {
    field: "createdDate",
    headerName: "Created Date",
    type: "date",
    width: 190,
    ...dateFormat,
  },
  {
    field: "numRecipients",
    headerName: "# of recipients",
    type: "number",
    width: 150,
    valueGetter: getNumRecipients,
  },
  {
    field: "activeBoxes",
    headerName: "Active boxes",
    type: "number",
    width: 150,
  },
  {
    field: "nextShipmentDate",
    headerName: "Next Shipment Date",
    type: "date",
    width: 190,
    ...dateFormat,
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      <GridFilterToolbarButton />
    </GridToolbarContainer>
  );
}

// Data grid (list) of all recipient lists of the current user
const RecipientLists = ({ data, rowClickedCallback, loading }) => {
  let dataToUse = data;
  if (dataToUse === undefined) {
    dataToUse = [];
  }

  return (
    <ListWrapper>
      <DataGrid
        rows={dataToUse}
        columns={columns}
        loading={loading}
        pageSize={6}
        autoHeight
        disableDensitySelector
        disableExportSelector
        sortModel={[
          {
            field: "createdDate",
            sort: "desc",
          },
        ]}
        onRowClick={rowClickedCallback}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </ListWrapper>
  );
};

export default RecipientLists;
