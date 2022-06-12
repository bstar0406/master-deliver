import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: "16px",
  },
  startButton: {
    backgroundColor: "#FDDE81",
    color: "black",
    boxShadow: "none",
    fontSize: "12px",
    borderRadius: "10px",
    width: "100%",
    height: "40px",
    marginLeft: "auto !important",
    "&:hover": {
      backgroundColor: "#FDDE81",
      color: "black",
    },
  },
});

export { useStyles };
