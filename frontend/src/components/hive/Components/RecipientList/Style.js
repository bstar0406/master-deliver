import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  startButton: {
    backgroundColor: "#FDDE81",
    color: "black",
    boxShadow: "none",
    fontSize: "12px",
    borderRadius: "10px",
    width: "266px",
    height: "56px",
    padding: "20px 40px",
    marginLeft: "auto !important",
    "&:hover": {
      backgroundColor: "#FDDE81",
      color: "black",
    },
  },
});

export { useStyles };
