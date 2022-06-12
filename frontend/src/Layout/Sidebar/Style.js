import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideBar: {
    position: "fixed",
    marginTop: "60px",
  },
  sideButton: {
    backgroundColor: "transparent",
    color: "#384182",
    boxShadow: "none",
    width: "170px",
    height: "90px",
    justifyContent: "flex-end !important",
    "&:hover": {
      backgroundColor: "#FDDE81",
      boxShadow: "none",
      color: "black",
      img: {
        color: "black !important",
      },
    },
  },
  sideActive: {
    backgroundColor: "#FDDE81 !important",
  },
  imageButton: {
    width: "40px",
  },
});

export { useStyles };