import React from "react";
import useStyle from "../../../theme";
import { Typography } from "@mui/material";

const BookTitle = () => {
    const classes = useStyle();
    return (
        <>
            <Typography
                className={classes.bookTitle}
            >
                Beyond Entrepreneurship 2.0
            </Typography>
        </>
    );
};

export default BookTitle;