import { makeStyles } from "@material-ui/core";
import { withStyles, LinearProgress } from "@material-ui/core";
const useStyles = makeStyles({
  
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 16,
    borderRadius: 8,
    width: "95%",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#FDDE81",
    value: 10,
  },
}))(LinearProgress);

export { useStyles, BorderLinearProgress };