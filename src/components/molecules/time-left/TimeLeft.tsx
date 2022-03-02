import React from "react";
import TimerIcon from "../../atoms/timer/TimerIcon";
import useStyle from "../../../theme";
import { Grid, Typography } from "@mui/material";

const ReadTime = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.timeLeftTypography}>
            <Grid item>
                <TimerIcon />
            </Grid>

            <Grid item className={classes.timeLeftTypography}>
                <Typography variant="caption">13-minute read</Typography>
            </Grid>
        </Grid>
    );
};

export default ReadTime;