import { Typography } from "@mui/material";
import React from "react";
import useStyle from "../../../theme";

const AuthorName = () => {
    const classes = useStyle();
    return (
        <>
            <Typography className={classes.authorNameTypography}>
                Jim Collins & Bill Lazier
            </Typography>
        </>
    )
}

export default AuthorName;