import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    typeButton: {
        height: "56px",
        width: "100%"
    },
    startButton: {
        backgroundColor: "#FDDE81",
        color: "black",
        boxShadow: "none",
        fontSize: "12px",
        borderRadius: "10px",
        width: "332px",
        height: "56px",
        marginLeft: "auto !important",
        "&:hover": {
            backgroundColor: "#FDDE81",
            color: "black",
        },
    },
});

export { useStyles };
