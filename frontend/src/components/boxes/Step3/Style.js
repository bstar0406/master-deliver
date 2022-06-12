import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  startButton: {
    backgroundColor: "#FDDE81",
    color: "black",
    boxShadow: "none",
    fontSize: "12px",
    borderRadius: "10px",
    width: "200px",
    height: "40px",
    marginLeft: "auto !important",
    "&:hover": {
      backgroundColor: "#FDDE81",
      color: "black",
    },
  },
});

export { useStyles };